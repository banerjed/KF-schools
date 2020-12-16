import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * AssignmentResult database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const assignmentResult = sequelize.define(
    'assignmentResult',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      submissionDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('submissionDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('submissionDate'))
                .format('YYYY-MM-DD')
            : null;
        },
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

  assignmentResult.associate = (models) => {
    models.assignmentResult.belongsTo(models.assignment, {
      as: 'assignment',
      constraints: false,
    });

    models.assignmentResult.belongsTo(models.student, {
      as: 'student',
      constraints: false,
    });


    
    models.assignmentResult.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.assignmentResult.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.assignmentResult.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return assignmentResult;
}
