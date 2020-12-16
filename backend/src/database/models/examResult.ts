import { DataTypes } from 'sequelize';

/**
 * ExamResult database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const examResult = sequelize.define(
    'examResult',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      score: {
        type: DataTypes.INTEGER,
        validate: {
          max: 100,
        }
      },
      grade: {
        type: DataTypes.ENUM,
        values: [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F"
        ],
      },
      teacherNotes: {
        type: DataTypes.TEXT,
        validate: {

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

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  examResult.associate = (models) => {
    models.examResult.belongsTo(models.examination, {
      as: 'exam',
      constraints: false,
    });

    models.examResult.belongsTo(models.student, {
      as: 'student',
      constraints: false,
    });


    
    models.examResult.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.examResult.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.examResult.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return examResult;
}
