import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'firstName',
    label: i18n('entities.sponsor.fields.firstName'),
    schema: schemas.string(
      i18n('entities.sponsor.fields.firstName'),
      {
        "required": true,
        "min": 2
      },
    ),
  },
  {
    name: 'lastName',
    label: i18n('entities.sponsor.fields.lastName'),
    schema: schemas.string(
      i18n('entities.sponsor.fields.lastName'),
      {
        "required": true,
        "min": 2
      },
    ),
  },
  {
    name: 'fullName',
    label: i18n('entities.sponsor.fields.fullName'),
    schema: schemas.string(
      i18n('entities.sponsor.fields.fullName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'students',
    label: i18n('entities.sponsor.fields.students'),
    schema: schemas.relationToMany(
      i18n('entities.sponsor.fields.students'),
      {},
    ),
  },
  {
    name: 'startDate',
    label: i18n('entities.sponsor.fields.startDate'),
    schema: schemas.date(
      i18n('entities.sponsor.fields.startDate'),
      {},
    ),
  },
  {
    name: 'endDate',
    label: i18n('entities.sponsor.fields.endDate'),
    schema: schemas.date(
      i18n('entities.sponsor.fields.endDate'),
      {},
    ),
  },
];