import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.studentAttendance.fields.id'),
  },
  {
    name: 'student',
    label: i18n('entities.studentAttendance.fields.student'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'schoolDate',
    label: i18n('entities.studentAttendance.fields.schoolDate'),
  },
  {
    name: 'attended',
    label: i18n('entities.studentAttendance.fields.attended'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.studentAttendance.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.studentAttendance.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
