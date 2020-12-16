import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.staffAttendance.fields.id'),
  },
  {
    name: 'staff',
    label: i18n('entities.staffAttendance.fields.staff'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'schoolDate',
    label: i18n('entities.staffAttendance.fields.schoolDate'),
  },
  {
    name: 'hasWorked',
    label: i18n('entities.staffAttendance.fields.hasWorked'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'startTime',
    label: i18n('entities.staffAttendance.fields.startTime'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'endTime',
    label: i18n('entities.staffAttendance.fields.endTime'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.staffAttendance.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.staffAttendance.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
