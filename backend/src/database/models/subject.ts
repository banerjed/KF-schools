import { DataTypes } from 'sequelize';

/**
 * Subject database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const subject = sequelize.define(
    'subject',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [4, 50],
          notEmpty: true,
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

  subject.associate = (models) => {
    models.subject.hasMany(models.staff, {
      as: 'teachers',
      constraints: false,
      foreignKey: 'subjectId',
    });


    
    models.subject.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.subject.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.subject.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return subject;
}
