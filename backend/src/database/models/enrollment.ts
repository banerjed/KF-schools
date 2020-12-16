import { DataTypes } from 'sequelize';

/**
 * Enrollment database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const enrollment = sequelize.define(
    'enrollment',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      academicYear: {
        type: DataTypes.ENUM,
        values: [
          "_2020",
          "_2021",
          "_2022",
          "_2023"
        ],
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

  enrollment.associate = (models) => {
    models.enrollment.belongsTo(models.student, {
      as: 'student',
      constraints: false,
    });

    models.enrollment.belongsTo(models.section, {
      as: 'section',
      constraints: false,
    });


    
    models.enrollment.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.enrollment.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.enrollment.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return enrollment;
}
