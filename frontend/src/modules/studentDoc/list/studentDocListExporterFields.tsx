import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.studentDoc.fields.id'),
  },
  {
    name: 'student',
    label: i18n('entities.studentDoc.fields.student'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'docAttachment',
    label: i18n('entities.studentDoc.fields.docAttachment'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'docName',
    label: i18n('entities.studentDoc.fields.docName'),
  },
  {
    name: 'comment',
    label: i18n('entities.studentDoc.fields.comment'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.studentDoc.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.studentDoc.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
