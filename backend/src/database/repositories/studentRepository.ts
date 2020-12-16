import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';
import FileRepository from './fileRepository';
import { IRepositoryOptions } from './IRepositoryOptions';

const Op = Sequelize.Op;

/**
 * Handles database operations for the Student.
 * See https://sequelize.org/v5/index.html to learn how to customize it.
 */
class StudentRepository {
  /**
   * Creates the Student.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  static async create(data, options: IRepositoryOptions) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const record = await options.database.student.create(
      {
        ...lodash.pick(data, [
          'rollNumber',
          'firstName',
          'middleName',
          'lastName',
          'fullName',
          'gender',
          'dateOfBirth',
          'dateOfJoin',
          'needsSponsorship',
          'aboutStudent',          
          'importHash',
        ]),
        tenantId: tenant.id,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    await record.setSchool(data.school || null, {
      transaction,
    });
    await record.setHousehold(data.household || null, {
      transaction,
    });
    await record.setEnrollments(data.enrollments || [], {
      transaction,
    });
    await record.setPayments(data.payments || [], {
      transaction,
    });
    await record.setCurrentSection(data.currentSection || null, {
      transaction,
    });
    await record.setCurrentSponsor(data.currentSponsor || null, {
      transaction,
    });
  
    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.student.getTableName(),
        belongsToColumn: 'picture',
        belongsToId: record.id,
      },
      data.picture,
      options,
    );
  
    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  /**
   * Updates the Student.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  static async update(id, data, options: IRepositoryOptions) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await options.database.student.findByPk(
      id,
      {
        transaction,
      },
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    if (
      !record ||
      String(record.tenantId) !== String(tenant.id)
    ) {
      throw new Error404();
    }

    record = await record.update(
      {
        ...lodash.pick(data, [
          'rollNumber',
          'firstName',
          'middleName',
          'lastName',
          'fullName',
          'gender',
          'dateOfBirth',
          'dateOfJoin',
          'needsSponsorship',
          'aboutStudent',          
          'importHash',
        ]),
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    await record.setSchool(data.school || null, {
      transaction,
    });
    await record.setHousehold(data.household || null, {
      transaction,
    });
    await record.setEnrollments(data.enrollments || [], {
      transaction,
    });
    await record.setPayments(data.payments || [], {
      transaction,
    });
    await record.setCurrentSection(data.currentSection || null, {
      transaction,
    });
    await record.setCurrentSponsor(data.currentSponsor || null, {
      transaction,
    });

    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.student.getTableName(),
        belongsToColumn: 'picture',
        belongsToId: record.id,
      },
      data.picture,
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  /**
   * Deletes the Student.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  static async destroy(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await options.database.student.findByPk(
      id,
      {
        transaction,
      },
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    if (
      !record ||
      String(record.tenantId) !== String(tenant.id)
    ) {
      throw new Error404();
    }

    await record.destroy({
      transaction,
    });

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      record,
      record,
      options,
    );
  }

  /**
   * Finds the Student and its relations.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  static async findById(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const include = [
      {
        model: options.database.school,
        as: 'school',
      },
      {
        model: options.database.household,
        as: 'household',
      },
      {
        model: options.database.section,
        as: 'currentSection',
      },
      {
        model: options.database.sponsor,
        as: 'currentSponsor',
      },
    ];

    const record = await options.database.student.findByPk(
      id,
      {
        include,
        transaction,
      },
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    if (
      !record ||
      String(record.tenantId) !== String(tenant.id)
    ) {
      throw new Error404();
    }

    return this._fillWithRelationsAndFiles(record, options);
  }

  /**
   * Counts the number of Students based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  static async count(filter, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    return options.database.student.count(
      {
        where: {
          ...filter,
          tenantId: tenant.id,
        },
      },
      {
        transaction,
      },
    );
  }

  /**
   * Finds the Students based on the query.
   * See https://sequelize.org/v5/manual/querying.html to learn how to
   * customize the query.
   *
   * @param {Object} query
   * @param {Object} query.filter
   * @param {number} query.limit
   * @param  {number} query.offset
   * @param  {string} query.orderBy
   * @param {Object} [options]
   *
   * @returns {Promise<Object>} response - Object containing the rows and the count.
   */
  static async findAndCountAll(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let whereAnd: Array<any> = [];
    let include = [
      {
        model: options.database.school,
        as: 'school',
      },
      {
        model: options.database.household,
        as: 'household',
      },
      {
        model: options.database.section,
        as: 'currentSection',
      },
      {
        model: options.database.sponsor,
        as: 'currentSponsor',
      },      
    ];

    whereAnd.push({
      tenantId: tenant.id,
    });

    if (filter) {
      if (filter.id) {
        whereAnd.push({
          ['id']: SequelizeFilterUtils.uuid(filter.id),
        });
      }

      if (filter.rollNumber) {
        whereAnd.push(
          SequelizeFilterUtils.ilike(
            'student',
            'rollNumber',
            filter.rollNumber,
          ),
        );
      }

      if (filter.firstName) {
        whereAnd.push(
          SequelizeFilterUtils.ilike(
            'student',
            'firstName',
            filter.firstName,
          ),
        );
      }

      if (filter.lastName) {
        whereAnd.push(
          SequelizeFilterUtils.ilike(
            'student',
            'lastName',
            filter.lastName,
          ),
        );
      }

      if (filter.school) {
        whereAnd.push({
          ['schoolId']: SequelizeFilterUtils.uuid(
            filter.school,
          ),
        });
      }

      if (filter.currentSection) {
        whereAnd.push({
          ['currentSectionId']: SequelizeFilterUtils.uuid(
            filter.currentSection,
          ),
        });
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          whereAnd.push({
            ['createdAt']: {
              [Op.gte]: start,
            },
          });
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          whereAnd.push({
            ['createdAt']: {
              [Op.lte]: end,
            },
          });
        }
      }
    }

    const where = { [Op.and]: whereAnd };

    let {
      rows,
      count,
    } = await options.database.student.findAndCountAll({
      where,
      include,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      order: orderBy
        ? [orderBy.split('_')]
        : [['createdAt', 'DESC']],
      transaction: SequelizeRepository.getTransaction(
        options,
      ),
    });

    rows = await this._fillWithRelationsAndFilesForRows(
      rows,
      options,
    );

    return { rows, count };
  }

  /**
   * Lists the Students to populate the autocomplete.
   * See https://sequelize.org/v5/manual/querying.html to learn how to
   * customize the query.
   *
   * @param {Object} query
   * @param {number} limit
   */
  static async findAllAutocomplete(query, limit, options: IRepositoryOptions) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let where: any = {
      tenantId: tenant.id,
    };

    if (query) {
      where = {
        ...where,
        [Op.or]: [
          { ['id']: SequelizeFilterUtils.uuid(query) },
          {
            [Op.and]: SequelizeFilterUtils.ilike(
              'student',
              'fullName',
              query,
            ),
          },
        ],
      };
    }

    const records = await options.database.student.findAll(
      {
        attributes: ['id', 'fullName'],
        where,
        limit: limit ? Number(limit) : undefined,
        orderBy: [['fullName', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.fullName,
    }));
  }

  /**
   * Creates an audit log of the operation.
   *
   * @param {string} action - The action [create, update or delete].
   * @param {object} record - The sequelize record
   * @param {object} data - The new data passed on the request
   * @param {object} options
   */
  static async _createAuditLog(
    action,
    record,
    data,
    options: IRepositoryOptions,
  ) {
    let values = {};

    if (data) {
      values = {
        ...record.get({ plain: true }),
        picture: data.picture,
        enrollmentsIds: data.enrollments,
        paymentsIds: data.payments,
      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'student',
        entityId: record.id,
        action,
        values,
      },
      options,
    );
  }

  /**
   * Fills an array of Student with relations and files.
   *
   * @param {Array} rows
   * @param {Object} [options]
   */
  static async _fillWithRelationsAndFilesForRows(
    rows,
    options: IRepositoryOptions,
  ) {
    if (!rows) {
      return rows;
    }

    return Promise.all(
      rows.map((record) =>
        this._fillWithRelationsAndFiles(record, options),
      ),
    );
  }

  /**
   * Fill the Student with the relations and files.
   *
   * @param {Object} record
   * @param {Object} [options]
   */
  static async _fillWithRelationsAndFiles(record, options: IRepositoryOptions) {
    if (!record) {
      return record;
    }

    const output = record.get({ plain: true });

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    output.picture = await FileRepository.fillDownloadUrl(
      await record.getPicture({
        transaction,
      }),
    );
    output.enrollments = await record.getEnrollments({
      transaction,
    });
    output.payments = await record.getPayments({
      transaction,
    });

    return output;
  }
}

export default StudentRepository;
