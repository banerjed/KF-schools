import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * ReportCard database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const reportCard = sequelize.define(
    'reportCard',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      reportDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('reportDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('reportDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM,
        values: [
          "HalfYearly",
          "Quarterly",
          "Final",
          "Monthly",
          "SchoolFinal",
          "Madhyamik",
          "ICSE",
          "UchhaMadhyamik",
          "CBSE",
          "Class_12",
          "Other"
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

  reportCard.associate = (models) => {
    models.reportCard.belongsTo(models.student, {
      as: 'student',
      constraints: false,
    });

    models.reportCard.hasMany(models.file, {
      as: 'reportCardAttachment',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.reportCard.getTableName(),
        belongsToColumn: 'reportCardAttachment',
      },
    });
    
    models.reportCard.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.reportCard.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.reportCard.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return reportCard;
}
