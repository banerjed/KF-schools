import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.household.fields.id'),
  },
  {
    name: 'familyLastName',
    label: i18n('entities.household.fields.familyLastName'),
  },
  {
    name: 'address',
    label: i18n('entities.household.fields.address'),
  },
  {
    name: 'zipcode',
    label: i18n('entities.household.fields.zipcode'),
  },
  {
    name: 'primaryGuardianRole',
    label: i18n('entities.household.fields.primaryGuardianRole'),
  },
  {
    name: 'primaryGuardianFullName',
    label: i18n('entities.household.fields.primaryGuardianFullName'),
  },
  {
    name: 'primaryGuardianCellPhone',
    label: i18n('entities.household.fields.primaryGuardianCellPhone'),
  },
  {
    name: 'primaryGuardianEmail',
    label: i18n('entities.household.fields.primaryGuardianEmail'),
  },
  {
    name: 'primaryGuardianProfession',
    label: i18n('entities.household.fields.primaryGuardianProfession'),
  },
  {
    name: 'backupGuardianRole',
    label: i18n('entities.household.fields.backupGuardianRole'),
  },
  {
    name: 'backupGuardianFullName',
    label: i18n('entities.household.fields.backupGuardianFullName'),
  },
  {
    name: 'backupGuardianCellPhone',
    label: i18n('entities.household.fields.backupGuardianCellPhone'),
  },
  {
    name: 'backupGuardianEmail',
    label: i18n('entities.household.fields.backupGuardianEmail'),
  },
  {
    name: 'backupGuardianProfession',
    label: i18n('entities.household.fields.backupGuardianProfession'),
  },
  {
    name: 'students',
    label: i18n('entities.household.fields.students'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'payments',
    label: i18n('entities.household.fields.payments'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.household.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.household.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
