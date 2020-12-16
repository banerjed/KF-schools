import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * Assignment database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const assignment = sequelize.define(
    'assignment',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      category: {
        type: DataTypes.ENUM,
        values: [
          "Homework",
          "Project",
          "Classwork",
          "Assessment",
          "Labs",
          "Other"
        ],
      },
      dueDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('dueDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('dueDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      homeworkLink: {
        type: DataTypes.STRING(255),
        validate: {

        }
      },
      maxScore: {
        type: DataTypes.INTEGER,
      },
      weight: {
        type: DataTypes.INTEGER,
        validate: {
          max: 100,
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

  assignment.associate = (models) => {
    models.assignment.belongsTo(models.course, {
      as: 'course',
      constraints: false,
    });

    models.assignment.hasMany(models.assignmentResult, {
      as: 'results',
      constraints: false,
      foreignKey: 'assignmentId',
    });


    
    models.assignment.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.assignment.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.assignment.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return assignment;
}
