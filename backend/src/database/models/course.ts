import { DataTypes } from 'sequelize';
import StringUtils from '../utils/stringUtils';

/**
 * Course database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const course = sequelize.define(
    'course',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      schoolYear: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          "Yr_2020_21",
          "Yr_2021_22",
          "Yr_2022_23",
          "Yr_2019_20",
          "Yr_2018_19",
          "Yr_2017_18",
          "Yr_2016_17",
          "Yr_2015_16"
        ],
      },
      courseName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [5, 100],
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
        {
          unique: true,
          fields: ['courseName', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  course.associate = (models) => {
    models.course.belongsTo(models.school, {
      as: 'school',
      constraints: false,
    });

    models.course.belongsTo(models.section, {
      as: 'section',
      constraints: false,
    });

    models.course.belongsTo(models.subject, {
      as: 'subject',
      constraints: false,
    });

    models.course.belongsTo(models.staff, {
      as: 'teacher',
      constraints: false,
    });

    models.course.hasMany(models.assignment, {
      as: 'assignments',
      constraints: false,
      foreignKey: 'courseId',
    });

    models.course.hasMany(models.examination, {
      as: 'examinations',
      constraints: false,
      foreignKey: 'courseId',
    });


    
    models.course.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.course.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.course.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

//  course.beforeCreate((course, options) => {
//    course.courseName = StringUtils.buildCourseName(
//      course.teacher,
//      course.section,
//      course.subject
//    );
//  });

  return course;
}
