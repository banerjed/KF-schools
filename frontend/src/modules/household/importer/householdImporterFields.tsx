import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import householdEnumerators from 'src/modules/household/householdEnumerators';

export default [
  {
    name: 'familyLastName',
    label: i18n('entities.household.fields.familyLastName'),
    schema: schemas.string(
      i18n('entities.household.fields.familyLastName'),
      {
        "required": true,
        "min": 3,
        "max": 100
      },
    ),
  },
  {
    name: 'address',
    label: i18n('entities.household.fields.address'),
    schema: schemas.string(
      i18n('entities.household.fields.address'),
      {
        "max": 255,
        "min": 10
      },
    ),
  },
  {
    name: 'zipcode',
    label: i18n('entities.household.fields.zipcode'),
    schema: schemas.string(
      i18n('entities.household.fields.zipcode'),
      {
        "max": 10,
        "min": 5
      },
    ),
  },
  {
    name: 'primaryGuardianRole',
    label: i18n('entities.household.fields.primaryGuardianRole'),
    schema: schemas.enumerator(
      i18n('entities.household.fields.primaryGuardianRole'),
      {
        "required": true,
        "options": householdEnumerators.primaryGuardianRole
      },
    ),
  },
  {
    name: 'primaryGuardianFullName',
    label: i18n('entities.household.fields.primaryGuardianFullName'),
    schema: schemas.string(
      i18n('entities.household.fields.primaryGuardianFullName'),
      {
        "max": 100,
        "min": 5,
        "required": true
      },
    ),
  },
  {
    name: 'primaryGuardianCellPhone',
    label: i18n('entities.household.fields.primaryGuardianCellPhone'),
    schema: schemas.string(
      i18n('entities.household.fields.primaryGuardianCellPhone'),
      {
        "max": 20,
        "min": 10
      },
    ),
  },
  {
    name: 'primaryGuardianEmail',
    label: i18n('entities.household.fields.primaryGuardianEmail'),
    schema: schemas.string(
      i18n('entities.household.fields.primaryGuardianEmail'),
      {
        "min": 10,
        "max": 100
      },
    ),
  },
  {
    name: 'primaryGuardianProfession',
    label: i18n('entities.household.fields.primaryGuardianProfession'),
    schema: schemas.string(
      i18n('entities.household.fields.primaryGuardianProfession'),
      {},
    ),
  },
  {
    name: 'backupGuardianRole',
    label: i18n('entities.household.fields.backupGuardianRole'),
    schema: schemas.enumerator(
      i18n('entities.household.fields.backupGuardianRole'),
      {
        "options": householdEnumerators.backupGuardianRole
      },
    ),
  },
  {
    name: 'backupGuardianFullName',
    label: i18n('entities.household.fields.backupGuardianFullName'),
    schema: schemas.string(
      i18n('entities.household.fields.backupGuardianFullName'),
      {
        "min": 5,
        "max": 100
      },
    ),
  },
  {
    name: 'backupGuardianCellPhone',
    label: i18n('entities.household.fields.backupGuardianCellPhone'),
    schema: schemas.string(
      i18n('entities.household.fields.backupGuardianCellPhone'),
      {
        "min": 10,
        "max": 20
      },
    ),
  },
  {
    name: 'backupGuardianEmail',
    label: i18n('entities.household.fields.backupGuardianEmail'),
    schema: schemas.string(
      i18n('entities.household.fields.backupGuardianEmail'),
      {
        "min": 10,
        "max": 100
      },
    ),
  },
  {
    name: 'backupGuardianProfession',
    label: i18n('entities.household.fields.backupGuardianProfession'),
    schema: schemas.string(
      i18n('entities.household.fields.backupGuardianProfession'),
      {},
    ),
  },
  {
    name: 'students',
    label: i18n('entities.household.fields.students'),
    schema: schemas.relationToMany(
      i18n('entities.household.fields.students'),
      {},
    ),
  },
  {
    name: 'payments',
    label: i18n('entities.household.fields.payments'),
    schema: schemas.relationToMany(
      i18n('entities.household.fields.payments'),
      {},
    ),
  },
];