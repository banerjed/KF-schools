import { DataTypes } from 'sequelize';
import moment from 'moment';
import StringUtils from '../utils/stringUtils';

/**
 * Staff database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const staff = sequelize.define(
    'staff',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      prefix: {
        type: DataTypes.ENUM,
        values: [
          "Mr",
          "Mrs",
          "Ms",
          "Dr"
        ],
      },
      firstName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [3, 100],
          notEmpty: true,
        }
      },
      middleName: {
        type: DataTypes.STRING(100),
        validate: {

        }
      },
      lastName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [3, 100],
          notEmpty: true,
        }
      },
      fullName: {
        type: DataTypes.TEXT,
      },
      role: {
        type: DataTypes.ENUM,
        values: [
          "Principal",
          "VicePrincipal",
          "Secretary",
          "Librarian",
          "Accountant",
          "Nurse",
          "Teacher",
          "Admin",
          "CleaningStaff",
          "Councillor",
          "Other"
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
      },
      gender: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          "Male",
          "Female"
        ],
      },
      maritalStatus: {
        type: DataTypes.ENUM,
        values: [
          "Single",
          "Married",
          "Divorced",
          "Widowed",
          "Spinster"
        ],
      },
      email: {
        type: DataTypes.STRING(100),
        validate: {
          len: [10, 100],
        }
      },
      cellPhone: {
        type: DataTypes.STRING(20),
        validate: {
          len: [10, 20],
        }
      },
      alternatePhone: {
        type: DataTypes.STRING(20),
        validate: {
          len: [10, 20],
        }
      },
      address: {
        type: DataTypes.STRING(255),
        validate: {

        }
      },
      dateOfJoining: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('dateOfJoining')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('dateOfJoining'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      dateOfTermination: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('dateOfTermination')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('dateOfTermination'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      educationalQualifications: {
        type: DataTypes.ENUM,
        values: [
          "HighSchool",
          "Matriculate",
          "Diploma",
          "BEd",
          "DegreeCollege",
          "PostGraduate",
          "Other"
        ],
      },
      priorExperience: {
        type: DataTypes.TEXT,
        validate: {

        }
      },
      monthlySalary: {
        type: DataTypes.DECIMAL,
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

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  staff.associate = (models) => {
    models.staff.belongsTo(models.user, {
      as: 'user',
      constraints: false,
    });

    models.staff.belongsTo(models.school, {
      as: 'school',
      constraints: false,
    });

    models.staff.belongsTo(models.subject, {
      as: 'subject',
      constraints: false,
    });

    models.staff.hasMany(models.file, {
      as: 'picture',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.staff.getTableName(),
        belongsToColumn: 'picture',
      },
    });
    
    models.staff.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.staff.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.staff.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  staff.beforeCreate((staff, options) => {
    staff.firstName  = StringUtils.trimString(staff.firstName);
    staff.middleName = StringUtils.trimString(staff.middleName);
    staff.lastName   = StringUtils.trimString(staff.lastName);

    staff.fullName = StringUtils.buildFullName(
      staff.firstName,
      staff.middleName,
      staff.lastName
    );
  });

  staff.beforeUpdate((staff, options) => {
    staff.firstName  = StringUtils.trimString(staff.firstName);
    staff.middleName = StringUtils.trimString(staff.middleName);
    staff.lastName   = StringUtils.trimString(staff.lastName);

    staff.fullName = StringUtils.buildFullName(
      staff.firstName,
      staff.middleName,
      staff.lastName
    );
  });

  return staff;
}
