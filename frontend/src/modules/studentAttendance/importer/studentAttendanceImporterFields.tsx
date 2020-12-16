import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'student',
    label: i18n('entities.studentAttendance.fields.student'),
    schema: schemas.relationToOne(
      i18n('entities.studentAttendance.fields.student'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'schoolDate',
    label: i18n('entities.studentAttendance.fields.schoolDate'),
    schema: schemas.date(
      i18n('entities.studentAttendance.fields.schoolDate'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'attended',
    label: i18n('entities.studentAttendance.fields.attended'),
    schema: schemas.boolean(
      i18n('entities.studentAttendance.fields.attended'),
      {},
    ),
  },
];