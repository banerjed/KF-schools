import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * Student database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const student = sequelize.define(
    'student',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      rollNumber: {
        type: DataTypes.STRING(50),
        validate: {
          len: [3, 50],
        }
      },
      firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [2, 50],
          notEmpty: true,
        }
      },
      middleName: {
        type: DataTypes.STRING(50),
        validate: {
          len: [2, 50],
        }
      },
      lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [2, 50],
          notEmpty: true,
        }
      },
      fullName: {
        type: DataTypes.TEXT,
      },
      gender: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          "Boy",
          "Girl"
        ],
      },
      dateOfBirth: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('dateOfBirth')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('dateOfBirth'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      dateOfJoin: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('dateOfJoin')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('dateOfJoin'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      needsSponsorship: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      aboutStudent: {
        type: DataTypes.TEXT,
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,        
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['importHash', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
        {
          unique: true,
          fields: ['rollNumber', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  student.associate = (models) => {
    models.student.belongsTo(models.school, {
      as: 'school',
      constraints: false,
    });

    models.student.belongsTo(models.household, {
      as: 'household',
      constraints: false,
    });

    models.student.hasMany(models.enrollment, {
      as: 'enrollments',
      constraints: false,
      foreignKey: 'studentId',
    });

    models.student.hasMany(models.studentPayment, {
      as: 'payments',
      constraints: false,
      foreignKey: 'studentId',
    });

    models.student.belongsTo(models.section, {
      as: 'currentSection',
      constraints: false,
    });

    models.student.belongsTo(models.sponsor, {
      as: 'currentSponsor',
      constraints: false,
    });

    models.student.hasMany(models.file, {
      as: 'picture',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.student.getTableName(),
        belongsToColumn: 'picture',
      },
    });
    
    models.student.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.student.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.student.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return student;
}
