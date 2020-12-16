import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.section.fields.id'),
  },
  {
    name: 'school',
    label: i18n('entities.section.fields.school'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'grade',
    label: i18n('entities.section.fields.grade'),
  },
  {
    name: 'sectionName',
    label: i18n('entities.section.fields.sectionName'),
  },
  {
    name: 'enrollments',
    label: i18n('entities.section.fields.enrollments'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.section.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.section.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
