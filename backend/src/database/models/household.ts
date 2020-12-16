import { DataTypes } from 'sequelize';

/**
 * Household database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const household = sequelize.define(
    'household',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      familyLastName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [3, 100],
          notEmpty: true,
        }
      },
      address: {
        type: DataTypes.STRING(255),
        validate: {
          len: [10, 255],
        }
      },
      zipcode: {
        type: DataTypes.STRING(10),
        validate: {
          len: [5, 10],
        }
      },
      primaryGuardianRole: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          "Father",
          "Mother",
          "Sister",
          "Brother",
          "Uncle",
          "Aunt",
          "Grandfather",
          "Grandmother",
          "Other"
        ],
      },
      primaryGuardianFullName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [5, 100],
          notEmpty: true,
        }
      },
      primaryGuardianCellPhone: {
        type: DataTypes.STRING(20),
        validate: {
          len: [10, 20],
        }
      },
      primaryGuardianEmail: {
        type: DataTypes.STRING(100),
        validate: {
          len: [10, 100],
        }
      },
      primaryGuardianProfession: {
        type: DataTypes.TEXT,
      },
      backupGuardianRole: {
        type: DataTypes.ENUM,
        values: [
          "Father",
          "Mother",
          "Sister",
          "Brother",
          "Uncle",
          "Aunt",
          "Grandfather",
          "Grandmother",
          "Other"
        ],
      },
      backupGuardianFullName: {
        type: DataTypes.STRING(100),
        validate: {
          len: [5, 100],
        }
      },
      backupGuardianCellPhone: {
        type: DataTypes.STRING(20),
        validate: {
          len: [10, 20],
        }
      },
      backupGuardianEmail: {
        type: DataTypes.STRING(100),
        validate: {
          len: [10, 100],
        }
      },
      backupGuardianProfession: {
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

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  household.associate = (models) => {
    models.household.hasMany(models.student, {
      as: 'students',
      constraints: false,
      foreignKey: 'householdId',
    });

    models.household.hasMany(models.studentPayment, {
      as: 'payments',
      constraints: false,
      foreignKey: 'householdId',
    });


    
    models.household.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.household.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.household.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return household;
}
