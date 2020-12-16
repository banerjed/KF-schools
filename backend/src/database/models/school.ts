import { DataTypes } from 'sequelize';

/**
 * School database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const school = sequelize.define(
    'school',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: {
          len: [5, 128],
          notEmpty: true,
        }
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [10, 255],
          notEmpty: true,
        }
      },
      contactPhone: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          len: [10, 20],
          notEmpty: true,
        }
      },
      contactEmail: {
        type: DataTypes.STRING(100),
        validate: {
          len: [10, 100],
        }
      },
      contactFax: {
        type: DataTypes.STRING(20),
        validate: {
          len: [10, 20],
        }
      },
      principalsName: {
        type: DataTypes.STRING(100),
        validate: {
          len: [10, 100],
        }
      },
      principalsEmail: {
        type: DataTypes.STRING(100),
        validate: {
          len: [10, 100],
        }
      },
      principalsPhone: {
        type: DataTypes.STRING(20),
        validate: {
          len: [10, 20],
        }
      },
      vicePrincipalsName: {
        type: DataTypes.STRING(100),
        validate: {
          len: [10, 100],
        }
      },
      vicePrincipalsEmail: {
        type: DataTypes.STRING(100),
        validate: {
          len: [10, 100],
        }
      },
      vicePrincipalsPhone: {
        type: DataTypes.STRING(20),
        validate: {
          len: [10, 20],
        }
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
          fields: ['name', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  school.associate = (models) => {



    
    models.school.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.school.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.school.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return school;
}
