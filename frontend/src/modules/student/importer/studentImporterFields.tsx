import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import studentEnumerators from 'src/modules/student/studentEnumerators';

export default [
  {
    name: 'picture',
    label: i18n('entities.student.fields.picture'),
    schema: schemas.images(
      i18n('entities.student.fields.picture'),
      {},
    ),
  },
  {
    name: 'rollNumber',
    label: i18n('entities.student.fields.rollNumber'),
    schema: schemas.string(
      i18n('entities.student.fields.rollNumber'),
      {
        "min": 3,
        "max": 50
      },
    ),
  },
  {
    name: 'firstName',
    label: i18n('entities.student.fields.firstName'),
    schema: schemas.string(
      i18n('entities.student.fields.firstName'),
      {
        "required": true,
        "min": 2,
        "max": 50
      },
    ),
  },
  {
    name: 'middleName',
    label: i18n('entities.student.fields.middleName'),
    schema: schemas.string(
      i18n('entities.student.fields.middleName'),
      {
        "min": 2,
        "max": 50
      },
    ),
  },
  {
    name: 'lastName',
    label: i18n('entities.student.fields.lastName'),
    schema: schemas.string(
      i18n('entities.student.fields.lastName'),
      {
        "required": true,
        "min": 2,
        "max": 50
      },
    ),
  },
  {
    name: 'fullName',
    label: i18n('entities.student.fields.fullName'),
    schema: schemas.string(
      i18n('entities.student.fields.fullName'),
      {},
    ),
  },
  {
    name: 'school',
    label: i18n('entities.student.fields.school'),
    schema: schemas.relationToOne(
      i18n('entities.student.fields.school'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'gender',
    label: i18n('entities.student.fields.gender'),
    schema: schemas.enumerator(
      i18n('entities.student.fields.gender'),
      {
        "required": true,
        "options": studentEnumerators.gender
      },
    ),
  },
  {
    name: 'dateOfBirth',
    label: i18n('entities.student.fields.dateOfBirth'),
    schema: schemas.date(
      i18n('entities.student.fields.dateOfBirth'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'dateOfJoin',
    label: i18n('entities.student.fields.dateOfJoin'),
    schema: schemas.date(
      i18n('entities.student.fields.dateOfJoin'),
      {},
    ),
  },
  {
    name: 'household',
    label: i18n('entities.student.fields.household'),
    schema: schemas.relationToOne(
      i18n('entities.student.fields.household'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'enrollments',
    label: i18n('entities.student.fields.enrollments'),
    schema: schemas.relationToMany(
      i18n('entities.student.fields.enrollments'),
      {},
    ),
  },
  {
    name: 'payments',
    label: i18n('entities.student.fields.payments'),
    schema: schemas.relationToMany(
      i18n('entities.student.fields.payments'),
      {},
    ),
  },
  {
    name: 'currentSection',
    label: i18n('entities.student.fields.currentSection'),
    schema: schemas.relationToOne(
      i18n('entities.student.fields.currentSection'),
      {},
    ),
  },
  {
    name: 'needsSponsorship',
    label: i18n('entities.student.fields.needsSponsorship'),
    schema: schemas.boolean(
      i18n('entities.student.fields.needsSponsorship'),
      {},
    ),
  },
  {
    name: 'aboutStudent',
    label: i18n('entities.student.fields.aboutStudent'),
    schema: schemas.string(
      i18n('entities.student.fields.aboutStudent'),
      {},
    ),
  },
  {
    name: 'currentSponsor',
    label: i18n('entities.student.fields.currentSponsor'),
    schema: schemas.relationToOne(
      i18n('entities.student.fields.currentSponsor'),
      {},
    ),
  },
];