import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import enrollmentEnumerators from 'src/modules/enrollment/enrollmentEnumerators';

export default [
  {
    name: 'student',
    label: i18n('entities.enrollment.fields.student'),
    schema: schemas.relationToOne(
      i18n('entities.enrollment.fields.student'),
      {},
    ),
  },
  {
    name: 'section',
    label: i18n('entities.enrollment.fields.section'),
    schema: schemas.relationToOne(
      i18n('entities.enrollment.fields.section'),
      {},
    ),
  },
  {
    name: 'academicYear',
    label: i18n('entities.enrollment.fields.academicYear'),
    schema: schemas.enumerator(
      i18n('entities.enrollment.fields.academicYear'),
      {
        "options": enrollmentEnumerators.academicYear
      },
    ),
  },
];