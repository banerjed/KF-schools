import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.examination.fields.id'),
  },
  {
    name: 'course',
    label: i18n('entities.examination.fields.course'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'category',
    label: i18n('entities.examination.fields.category'),
  },
  {
    name: 'examDate',
    label: i18n('entities.examination.fields.examDate'),
  },
  {
    name: 'weight',
    label: i18n('entities.examination.fields.weight'),
  },
  {
    name: 'maxScore',
    label: i18n('entities.examination.fields.maxScore'),
  },
  {
    name: 'name',
    label: i18n('entities.examination.fields.name'),
  },
  {
    name: 'results',
    label: i18n('entities.examination.fields.results'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.examination.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.examination.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
