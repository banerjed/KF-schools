import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'student',
    label: i18n('entities.studentDoc.fields.student'),
    schema: schemas.relationToOne(
      i18n('entities.studentDoc.fields.student'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'docAttachment',
    label: i18n('entities.studentDoc.fields.docAttachment'),
    schema: schemas.files(
      i18n('entities.studentDoc.fields.docAttachment'),
      {},
    ),
  },
  {
    name: 'docName',
    label: i18n('entities.studentDoc.fields.docName'),
    schema: schemas.string(
      i18n('entities.studentDoc.fields.docName'),
      {
        "required": true,
        "min": 5,
        "max": 100
      },
    ),
  },
  {
    name: 'comment',
    label: i18n('entities.studentDoc.fields.comment'),
    schema: schemas.string(
      i18n('entities.studentDoc.fields.comment'),
      {},
    ),
  },
];