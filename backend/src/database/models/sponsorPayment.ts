import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * SponsorPayment database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const sponsorPayment = sequelize.define(
    'sponsorPayment',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      paymentDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('paymentDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('paymentDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      paymentAmount: {
        type: DataTypes.DECIMAL(24, 2),
        allowNull: false,
        validate: {

        }
      },
      paymentType: {
        type: DataTypes.ENUM,
        values: [
          "Check",
          "Cash",
          "CreditCard",
          "NetBanking"
        ],
      },
      feeMonths: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      paymentNotes: {
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

  sponsorPayment.associate = (models) => {
    models.sponsorPayment.belongsTo(models.sponsor, {
      as: 'sponsor',
      constraints: false,
    });

    models.sponsorPayment.belongsTo(models.student, {
      as: 'student',
      constraints: false,
    });


    
    models.sponsorPayment.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.sponsorPayment.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.sponsorPayment.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return sponsorPayment;
}
