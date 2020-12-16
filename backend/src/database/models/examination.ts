import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * Examination database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const examination = sequelize.define(
    'examination',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      category: {
        type: DataTypes.ENUM,
        values: [
          "Weekly",
          "Bimonthly",
          "Monthly",
          "Quarterly",
          "HalfYearly",
          "Final"
        ],
      },
      examDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('examDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('examDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      weight: {
        type: DataTypes.INTEGER,
        validate: {
          max: 100,
        }
      },
      maxScore: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
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

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  examination.associate = (models) => {
    models.examination.belongsTo(models.course, {
      as: 'course',
      constraints: false,
    });

    models.examination.hasMany(models.examResult, {
      as: 'results',
      constraints: false,
      foreignKey: 'examId',
    });


    
    models.examination.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.examination.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.examination.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return examination;
}
