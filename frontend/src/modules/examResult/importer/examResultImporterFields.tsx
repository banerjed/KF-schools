import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import examResultEnumerators from 'src/modules/examResult/examResultEnumerators';

export default [
  {
    name: 'student',
    label: i18n('entities.examResult.fields.student'),
    schema: schemas.relationToOne(
      i18n('entities.examResult.fields.student'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'exam',
    label: i18n('entities.examResult.fields.exam'),
    schema: schemas.relationToOne(
      i18n('entities.examResult.fields.exam'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'score',
    label: i18n('entities.examResult.fields.score'),
    schema: schemas.integer(
      i18n('entities.examResult.fields.score'),
      {
        "max": 100,
        "min": 0
      },
    ),
  },
  {
    name: 'grade',
    label: i18n('entities.examResult.fields.grade'),
    schema: schemas.enumerator(
      i18n('entities.examResult.fields.grade'),
      {
        "options": examResultEnumerators.grade
      },
    ),
  },
  {
    name: 'teacherNotes',
    label: i18n('entities.examResult.fields.teacherNotes'),
    schema: schemas.string(
      i18n('entities.examResult.fields.teacherNotes'),
      {
        "max": 1024
      },
    ),
  },
];