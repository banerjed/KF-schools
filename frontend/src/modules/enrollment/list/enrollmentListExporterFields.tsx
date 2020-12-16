import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.enrollment.fields.id'),
  },
  {
    name: 'student',
    label: i18n('entities.enrollment.fields.student'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'section',
    label: i18n('entities.enrollment.fields.section'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'academicYear',
    label: i18n('entities.enrollment.fields.academicYear'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.enrollment.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.enrollment.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
