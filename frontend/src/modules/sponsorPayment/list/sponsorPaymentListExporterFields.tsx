import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.sponsorPayment.fields.id'),
  },
  {
    name: 'sponsor',
    label: i18n('entities.sponsorPayment.fields.sponsor'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'student',
    label: i18n('entities.sponsorPayment.fields.student'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'paymentDate',
    label: i18n('entities.sponsorPayment.fields.paymentDate'),
  },
  {
    name: 'paymentAmount',
    label: i18n('entities.sponsorPayment.fields.paymentAmount'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'paymentType',
    label: i18n('entities.sponsorPayment.fields.paymentType'),
  },
  {
    name: 'feeMonths',
    label: i18n('entities.sponsorPayment.fields.feeMonths'),
  },
  {
    name: 'paymentNotes',
    label: i18n('entities.sponsorPayment.fields.paymentNotes'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.sponsorPayment.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.sponsorPayment.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
