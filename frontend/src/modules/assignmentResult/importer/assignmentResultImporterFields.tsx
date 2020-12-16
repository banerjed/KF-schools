import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import assignmentResultEnumerators from 'src/modules/assignmentResult/assignmentResultEnumerators';

export default [
  {
    name: 'assignment',
    label: i18n('entities.assignmentResult.fields.assignment'),
    schema: schemas.relationToOne(
      i18n('entities.assignmentResult.fields.assignment'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'student',
    label: i18n('entities.assignmentResult.fields.student'),
    schema: schemas.relationToOne(
      i18n('entities.assignmentResult.fields.student'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'submissionDate',
    label: i18n('entities.assignmentResult.fields.submissionDate'),
    schema: schemas.date(
      i18n('entities.assignmentResult.fields.submissionDate'),
      {},
    ),
  },
  {
    name: 'score',
    label: i18n('entities.assignmentResult.fields.score'),
    schema: schemas.integer(
      i18n('entities.assignmentResult.fields.score'),
      {
        "min": 0,
        "max": 100
      },
    ),
  },
  {
    name: 'grade',
    label: i18n('entities.assignmentResult.fields.grade'),
    schema: schemas.enumerator(
      i18n('entities.assignmentResult.fields.grade'),
      {
        "options": assignmentResultEnumerators.grade
      },
    ),
  },
  {
    name: 'teacherNotes',
    label: i18n('entities.assignmentResult.fields.teacherNotes'),
    schema: schemas.string(
      i18n('entities.assignmentResult.fields.teacherNotes'),
      {
        "max": 1024
      },
    ),
  },
];