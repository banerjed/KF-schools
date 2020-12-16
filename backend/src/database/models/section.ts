import { DataTypes } from 'sequelize';

/**
 * Section database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const section = sequelize.define(
    'section',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      grade: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          "Nursery",
          "Pre_KG",
          "KG",
          "Class_I",
          "Class_2",
          "Class_3",
          "Class_4",
          "Class_5",
          "Class_6",
          "Class_7",
          "Class_8",
          "Class_9",
          "Class_10",
          "Class_11",
          "Class_12",
          "Evening",
          "Computer"
        ],
      },
      sectionName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [2, 50],
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
          fields: ['sectionName', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  section.associate = (models) => {
    models.section.belongsTo(models.school, {
      as: 'school',
      constraints: false,
    });

    models.section.hasMany(models.enrollment, {
      as: 'enrollments',
      constraints: false,
      foreignKey: 'sectionId',
    });


    
    models.section.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.section.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.section.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return section;
}
