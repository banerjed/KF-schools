import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import examinationEnumerators from 'src/modules/examination/examinationEnumerators';

export default [
  {
    name: 'course',
    label: i18n('entities.examination.fields.course'),
    schema: schemas.relationToOne(
      i18n('entities.examination.fields.course'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'category',
    label: i18n('entities.examination.fields.category'),
    schema: schemas.enumerator(
      i18n('entities.examination.fields.category'),
      {
        "options": examinationEnumerators.category
      },
    ),
  },
  {
    name: 'examDate',
    label: i18n('entities.examination.fields.examDate'),
    schema: schemas.date(
      i18n('entities.examination.fields.examDate'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'weight',
    label: i18n('entities.examination.fields.weight'),
    schema: schemas.integer(
      i18n('entities.examination.fields.weight'),
      {
        "min": 0,
        "max": 100
      },
    ),
  },
  {
    name: 'maxScore',
    label: i18n('entities.examination.fields.maxScore'),
    schema: schemas.integer(
      i18n('entities.examination.fields.maxScore'),
      {},
    ),
  },
  {
    name: 'name',
    label: i18n('entities.examination.fields.name'),
    schema: schemas.string(
      i18n('entities.examination.fields.name'),
      {
        "required": true,
        "max": 255
      },
    ),
  },
  {
    name: 'results',
    label: i18n('entities.examination.fields.results'),
    schema: schemas.relationToMany(
      i18n('entities.examination.fields.results'),
      {},
    ),
  },
];