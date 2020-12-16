import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import staffEnumerators from 'src/modules/staff/staffEnumerators';

export default [
  {
    name: 'user',
    label: i18n('entities.staff.fields.user'),
    schema: schemas.relationToOne(
      i18n('entities.staff.fields.user'),
      {},
    ),
  },
  {
    name: 'school',
    label: i18n('entities.staff.fields.school'),
    schema: schemas.relationToOne(
      i18n('entities.staff.fields.school'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'prefix',
    label: i18n('entities.staff.fields.prefix'),
    schema: schemas.enumerator(
      i18n('entities.staff.fields.prefix'),
      {
        "options": staffEnumerators.prefix
      },
    ),
  },
  {
    name: 'firstName',
    label: i18n('entities.staff.fields.firstName'),
    schema: schemas.string(
      i18n('entities.staff.fields.firstName'),
      {
        "required": true,
        "min": 3,
        "max": 100
      },
    ),
  },
  {
    name: 'middleName',
    label: i18n('entities.staff.fields.middleName'),
    schema: schemas.string(
      i18n('entities.staff.fields.middleName'),
      {
        "max": 100
      },
    ),
  },
  {
    name: 'lastName',
    label: i18n('entities.staff.fields.lastName'),
    schema: schemas.string(
      i18n('entities.staff.fields.lastName'),
      {
        "required": true,
        "min": 3,
        "max": 100
      },
    ),
  },
  {
    name: 'fullName',
    label: i18n('entities.staff.fields.fullName'),
    schema: schemas.string(
      i18n('entities.staff.fields.fullName'),
      {},
    ),
  },
  {
    name: 'role',
    label: i18n('entities.staff.fields.role'),
    schema: schemas.enumerator(
      i18n('entities.staff.fields.role'),
      {
        "options": staffEnumerators.role
      },
    ),
  },
  {
    name: 'subject',
    label: i18n('entities.staff.fields.subject'),
    schema: schemas.relationToOne(
      i18n('entities.staff.fields.subject'),
      {},
    ),
  },
  {
    name: 'dateOfBirth',
    label: i18n('entities.staff.fields.dateOfBirth'),
    schema: schemas.date(
      i18n('entities.staff.fields.dateOfBirth'),
      {},
    ),
  },
  {
    name: 'gender',
    label: i18n('entities.staff.fields.gender'),
    schema: schemas.enumerator(
      i18n('entities.staff.fields.gender'),
      {
        "required": true,
        "options": staffEnumerators.gender
      },
    ),
  },
  {
    name: 'maritalStatus',
    label: i18n('entities.staff.fields.maritalStatus'),
    schema: schemas.enumerator(
      i18n('entities.staff.fields.maritalStatus'),
      {
        "options": staffEnumerators.maritalStatus
      },
    ),
  },
  {
    name: 'email',
    label: i18n('entities.staff.fields.email'),
    schema: schemas.string(
      i18n('entities.staff.fields.email'),
      {
        "min": 10,
        "max": 100
      },
    ),
  },
  {
    name: 'cellPhone',
    label: i18n('entities.staff.fields.cellPhone'),
    schema: schemas.string(
      i18n('entities.staff.fields.cellPhone'),
      {
        "min": 10,
        "max": 20
      },
    ),
  },
  {
    name: 'alternatePhone',
    label: i18n('entities.staff.fields.alternatePhone'),
    schema: schemas.string(
      i18n('entities.staff.fields.alternatePhone'),
      {
        "min": 10,
        "max": 20
      },
    ),
  },
  {
    name: 'address',
    label: i18n('entities.staff.fields.address'),
    schema: schemas.string(
      i18n('entities.staff.fields.address'),
      {
        "max": 255
      },
    ),
  },
  {
    name: 'dateOfJoining',
    label: i18n('entities.staff.fields.dateOfJoining'),
    schema: schemas.date(
      i18n('entities.staff.fields.dateOfJoining'),
      {},
    ),
  },
  {
    name: 'dateOfTermination',
    label: i18n('entities.staff.fields.dateOfTermination'),
    schema: schemas.date(
      i18n('entities.staff.fields.dateOfTermination'),
      {},
    ),
  },
  {
    name: 'educationalQualifications',
    label: i18n('entities.staff.fields.educationalQualifications'),
    schema: schemas.enumerator(
      i18n('entities.staff.fields.educationalQualifications'),
      {
        "options": staffEnumerators.educationalQualifications
      },
    ),
  },
  {
    name: 'priorExperience',
    label: i18n('entities.staff.fields.priorExperience'),
    schema: schemas.string(
      i18n('entities.staff.fields.priorExperience'),
      {
        "max": 1024
      },
    ),
  },
  {
    name: 'monthlySalary',
    label: i18n('entities.staff.fields.monthlySalary'),
    schema: schemas.decimal(
      i18n('entities.staff.fields.monthlySalary'),
      {},
    ),
  },
  {
    name: 'picture',
    label: i18n('entities.staff.fields.picture'),
    schema: schemas.images(
      i18n('entities.staff.fields.picture'),
      {},
    ),
  },
];