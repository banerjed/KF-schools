import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.assignment.fields.id'),
  },
  {
    name: 'course',
    label: i18n('entities.assignment.fields.course'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'category',
    label: i18n('entities.assignment.fields.category'),
  },
  {
    name: 'dueDate',
    label: i18n('entities.assignment.fields.dueDate'),
  },
  {
    name: 'name',
    label: i18n('entities.assignment.fields.name'),
  },
  {
    name: 'homeworkLink',
    label: i18n('entities.assignment.fields.homeworkLink'),
  },
  {
    name: 'maxScore',
    label: i18n('entities.assignment.fields.maxScore'),
  },
  {
    name: 'weight',
    label: i18n('entities.assignment.fields.weight'),
  },
  {
    name: 'results',
    label: i18n('entities.assignment.fields.results'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.assignment.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.assignment.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
