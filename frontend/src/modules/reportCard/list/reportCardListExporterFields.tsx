import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.reportCard.fields.id'),
  },
  {
    name: 'student',
    label: i18n('entities.reportCard.fields.student'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'reportDate',
    label: i18n('entities.reportCard.fields.reportDate'),
  },
  {
    name: 'category',
    label: i18n('entities.reportCard.fields.category'),
  },
  {
    name: 'reportCardAttachment',
    label: i18n('entities.reportCard.fields.reportCardAttachment'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.reportCard.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.reportCard.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
