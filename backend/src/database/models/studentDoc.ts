import { DataTypes } from 'sequelize';

/**
 * StudentDoc database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const studentDoc = sequelize.define(
    'studentDoc',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      docName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [5, 100],
          notEmpty: true,
        }
      },
      comment: {
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

  studentDoc.associate = (models) => {
    models.studentDoc.belongsTo(models.student, {
      as: 'student',
      constraints: false,
    });

    models.studentDoc.hasMany(models.file, {
      as: 'docAttachment',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.studentDoc.getTableName(),
        belongsToColumn: 'docAttachment',
      },
    });
    
    models.studentDoc.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.studentDoc.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.studentDoc.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return studentDoc;
}
