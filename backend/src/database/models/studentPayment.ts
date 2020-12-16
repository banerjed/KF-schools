import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * StudentPayment database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const studentPayment = sequelize.define(
    'studentPayment',
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
        allowNull: false,
        values: [
          "Check",
          "Cash",
          "PayTM",
          "CreditCard",
          "Other"
        ],
      },
      feeMonths: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      paymentNotes: {
        type: DataTypes.STRING(255),
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

  studentPayment.associate = (models) => {
    models.studentPayment.belongsTo(models.household, {
      as: 'household',
      constraints: false,
    });

    models.studentPayment.belongsTo(models.student, {
      as: 'student',
      constraints: false,
    });


    
    models.studentPayment.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.studentPayment.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.studentPayment.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return studentPayment;
}
