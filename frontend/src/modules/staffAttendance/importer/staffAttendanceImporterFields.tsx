import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'staff',
    label: i18n('entities.staffAttendance.fields.staff'),
    schema: schemas.relationToOne(
      i18n('entities.staffAttendance.fields.staff'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'schoolDate',
    label: i18n('entities.staffAttendance.fields.schoolDate'),
    schema: schemas.date(
      i18n('entities.staffAttendance.fields.schoolDate'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'hasWorked',
    label: i18n('entities.staffAttendance.fields.hasWorked'),
    schema: schemas.boolean(
      i18n('entities.staffAttendance.fields.hasWorked'),
      {},
    ),
  },
  {
    name: 'startTime',
    label: i18n('entities.staffAttendance.fields.startTime'),
    schema: schemas.datetime(
      i18n('entities.staffAttendance.fields.startTime'),
      {},
    ),
  },
  {
    name: 'endTime',
    label: i18n('entities.staffAttendance.fields.endTime'),
    schema: schemas.datetime(
      i18n('entities.staffAttendance.fields.endTime'),
      {},
    ),
  },
];