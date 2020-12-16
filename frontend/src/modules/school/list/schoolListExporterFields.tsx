import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.school.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.school.fields.name'),
  },
  {
    name: 'address',
    label: i18n('entities.school.fields.address'),
  },
  {
    name: 'contactPhone',
    label: i18n('entities.school.fields.contactPhone'),
  },
  {
    name: 'contactEmail',
    label: i18n('entities.school.fields.contactEmail'),
  },
  {
    name: 'contactFax',
    label: i18n('entities.school.fields.contactFax'),
  },
  {
    name: 'principalsName',
    label: i18n('entities.school.fields.principalsName'),
  },
  {
    name: 'principalsEmail',
    label: i18n('entities.school.fields.principalsEmail'),
  },
  {
    name: 'principalsPhone',
    label: i18n('entities.school.fields.principalsPhone'),
  },
  {
    name: 'vicePrincipalsName',
    label: i18n('entities.school.fields.vicePrincipalsName'),
  },
  {
    name: 'vicePrincipalsEmail',
    label: i18n('entities.school.fields.vicePrincipalsEmail'),
  },
  {
    name: 'vicePrincipalsPhone',
    label: i18n('entities.school.fields.vicePrincipalsPhone'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.school.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.school.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
