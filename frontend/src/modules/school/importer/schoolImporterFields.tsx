import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.school.fields.name'),
    schema: schemas.string(
      i18n('entities.school.fields.name'),
      {
        "required": true,
        "min": 5,
        "max": 128
      },
    ),
  },
  {
    name: 'address',
    label: i18n('entities.school.fields.address'),
    schema: schemas.string(
      i18n('entities.school.fields.address'),
      {
        "required": true,
        "min": 10,
        "max": 255
      },
    ),
  },
  {
    name: 'contactPhone',
    label: i18n('entities.school.fields.contactPhone'),
    schema: schemas.string(
      i18n('entities.school.fields.contactPhone'),
      {
        "required": true,
        "min": 10,
        "max": 20
      },
    ),
  },
  {
    name: 'contactEmail',
    label: i18n('entities.school.fields.contactEmail'),
    schema: schemas.string(
      i18n('entities.school.fields.contactEmail'),
      {
        "min": 10,
        "max": 100
      },
    ),
  },
  {
    name: 'contactFax',
    label: i18n('entities.school.fields.contactFax'),
    schema: schemas.string(
      i18n('entities.school.fields.contactFax'),
      {
        "max": 20,
        "min": 10
      },
    ),
  },
  {
    name: 'principalsName',
    label: i18n('entities.school.fields.principalsName'),
    schema: schemas.string(
      i18n('entities.school.fields.principalsName'),
      {
        "min": 10,
        "max": 100
      },
    ),
  },
  {
    name: 'principalsEmail',
    label: i18n('entities.school.fields.principalsEmail'),
    schema: schemas.string(
      i18n('entities.school.fields.principalsEmail'),
      {
        "min": 10,
        "max": 100
      },
    ),
  },
  {
    name: 'principalsPhone',
    label: i18n('entities.school.fields.principalsPhone'),
    schema: schemas.string(
      i18n('entities.school.fields.principalsPhone'),
      {
        "min": 10,
        "max": 20
      },
    ),
  },
  {
    name: 'vicePrincipalsName',
    label: i18n('entities.school.fields.vicePrincipalsName'),
    schema: schemas.string(
      i18n('entities.school.fields.vicePrincipalsName'),
      {
        "min": 10,
        "max": 100
      },
    ),
  },
  {
    name: 'vicePrincipalsEmail',
    label: i18n('entities.school.fields.vicePrincipalsEmail'),
    schema: schemas.string(
      i18n('entities.school.fields.vicePrincipalsEmail'),
      {
        "min": 10,
        "max": 100
      },
    ),
  },
  {
    name: 'vicePrincipalsPhone',
    label: i18n('entities.school.fields.vicePrincipalsPhone'),
    schema: schemas.string(
      i18n('entities.school.fields.vicePrincipalsPhone'),
      {
        "min": 10,
        "max": 20
      },
    ),
  },
];