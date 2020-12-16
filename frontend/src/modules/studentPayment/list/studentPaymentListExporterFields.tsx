import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.studentPayment.fields.id'),
  },
  {
    name: 'household',
    label: i18n('entities.studentPayment.fields.household'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'student',
    label: i18n('entities.studentPayment.fields.student'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'paymentDate',
    label: i18n('entities.studentPayment.fields.paymentDate'),
  },
  {
    name: 'paymentAmount',
    label: i18n('entities.studentPayment.fields.paymentAmount'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'paymentType',
    label: i18n('entities.studentPayment.fields.paymentType'),
  },
  {
    name: 'feeMonths',
    label: i18n('entities.studentPayment.fields.feeMonths'),
  },
  {
    name: 'paymentNotes',
    label: i18n('entities.studentPayment.fields.paymentNotes'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.studentPayment.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.studentPayment.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
