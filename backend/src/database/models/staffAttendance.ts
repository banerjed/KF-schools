import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * StaffAttendance database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const staffAttendance = sequelize.define(
    'staffAttendance',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      schoolDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('schoolDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('schoolDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      hasWorked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      startTime: {
        type: DataTypes.DATE,
      },
      endTime: {
        type: DataTypes.DATE,
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

  staffAttendance.associate = (models) => {
    models.staffAttendance.belongsTo(models.staff, {
      as: 'staff',
      constraints: false,
    });


    
    models.staffAttendance.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.staffAttendance.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.staffAttendance.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return staffAttendance;
}
