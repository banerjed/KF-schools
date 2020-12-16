import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.sponsor.fields.id'),
  },
  {
    name: 'firstName',
    label: i18n('entities.sponsor.fields.firstName'),
  },
  {
    name: 'lastName',
    label: i18n('entities.sponsor.fields.lastName'),
  },
  {
    name: 'fullName',
    label: i18n('entities.sponsor.fields.fullName'),
  },
  {
    name: 'students',
    label: i18n('entities.sponsor.fields.students'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'startDate',
    label: i18n('entities.sponsor.fields.startDate'),
  },
  {
    name: 'endDate',
    label: i18n('entities.sponsor.fields.endDate'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.sponsor.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.sponsor.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
