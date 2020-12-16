import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * Sponsor database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const sponsor = sequelize.define(
    'sponsor',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      lastName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      fullName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      startDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('startDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('startDate'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      endDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('endDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('endDate'))
                .format('YYYY-MM-DD')
            : null;
        },
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

  sponsor.associate = (models) => {
    models.sponsor.hasMany(models.student, {
      as: 'students',
      constraints: false,
      foreignKey: 'currentSponsorId',
    });


    
    models.sponsor.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.sponsor.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.sponsor.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return sponsor;
}
