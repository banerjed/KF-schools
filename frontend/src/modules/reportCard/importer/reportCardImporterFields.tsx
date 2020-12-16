import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import reportCardEnumerators from 'src/modules/reportCard/reportCardEnumerators';

export default [
  {
    name: 'student',
    label: i18n('entities.reportCard.fields.student'),
    schema: schemas.relationToOne(
      i18n('entities.reportCard.fields.student'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'reportDate',
    label: i18n('entities.reportCard.fields.reportDate'),
    schema: schemas.date(
      i18n('entities.reportCard.fields.reportDate'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'category',
    label: i18n('entities.reportCard.fields.category'),
    schema: schemas.enumerator(
      i18n('entities.reportCard.fields.category'),
      {
        "options": reportCardEnumerators.category
      },
    ),
  },
  {
    name: 'reportCardAttachment',
    label: i18n('entities.reportCard.fields.reportCardAttachment'),
    schema: schemas.files(
      i18n('entities.reportCard.fields.reportCardAttachment'),
      {
        "required": true
      },
    ),
  },
];