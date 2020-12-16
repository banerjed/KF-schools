import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * StudentAttendance database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const studentAttendance = sequelize.define(
    'studentAttendance',
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
      attended: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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

  studentAttendance.associate = (models) => {
    models.studentAttendance.belongsTo(models.student, {
      as: 'student',
      constraints: false,
    });


    
    models.studentAttendance.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.studentAttendance.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.studentAttendance.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return studentAttendance;
}
