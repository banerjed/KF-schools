import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import courseEnumerators from 'src/modules/course/courseEnumerators';

export default [
  {
    name: 'school',
    label: i18n('entities.course.fields.school'),
    schema: schemas.relationToOne(
      i18n('entities.course.fields.school'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'section',
    label: i18n('entities.course.fields.section'),
    schema: schemas.relationToOne(
      i18n('entities.course.fields.section'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'subject',
    label: i18n('entities.course.fields.subject'),
    schema: schemas.relationToOne(
      i18n('entities.course.fields.subject'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'teacher',
    label: i18n('entities.course.fields.teacher'),
    schema: schemas.relationToOne(
      i18n('entities.course.fields.teacher'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'schoolYear',
    label: i18n('entities.course.fields.schoolYear'),
    schema: schemas.enumerator(
      i18n('entities.course.fields.schoolYear'),
      {
        "required": true,
        "options": courseEnumerators.schoolYear
      },
    ),
  },
  {
    name: 'courseName',
    label: i18n('entities.course.fields.courseName'),
    schema: schemas.string(
      i18n('entities.course.fields.courseName'),
      {
        "min": 5,
        "max": 100,
        "required": true
      },
    ),
  },
  {
    name: 'assignments',
    label: i18n('entities.course.fields.assignments'),
    schema: schemas.relationToMany(
      i18n('entities.course.fields.assignments'),
      {},
    ),
  },
  {
    name: 'examinations',
    label: i18n('entities.course.fields.examinations'),
    schema: schemas.relationToMany(
      i18n('entities.course.fields.examinations'),
      {},
    ),
  },
];