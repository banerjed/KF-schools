import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import sectionEnumerators from 'src/modules/section/sectionEnumerators';

export default [
  {
    name: 'school',
    label: i18n('entities.section.fields.school'),
    schema: schemas.relationToOne(
      i18n('entities.section.fields.school'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'grade',
    label: i18n('entities.section.fields.grade'),
    schema: schemas.enumerator(
      i18n('entities.section.fields.grade'),
      {
        "required": true,
        "options": sectionEnumerators.grade
      },
    ),
  },
  {
    name: 'sectionName',
    label: i18n('entities.section.fields.sectionName'),
    schema: schemas.string(
      i18n('entities.section.fields.sectionName'),
      {
        "required": true,
        "min": 2,
        "max": 50
      },
    ),
  },
  {
    name: 'enrollments',
    label: i18n('entities.section.fields.enrollments'),
    schema: schemas.relationToMany(
      i18n('entities.section.fields.enrollments'),
      {},
    ),
  },
];