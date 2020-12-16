import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.subject.fields.name'),
    schema: schemas.string(
      i18n('entities.subject.fields.name'),
      {
        "required": true,
        "min": 4,
        "max": 50
      },
    ),
  },
  {
    name: 'teachers',
    label: i18n('entities.subject.fields.teachers'),
    schema: schemas.relationToMany(
      i18n('entities.subject.fields.teachers'),
      {},
    ),
  },
];