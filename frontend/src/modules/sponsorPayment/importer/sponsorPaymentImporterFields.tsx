import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import sponsorPaymentEnumerators from 'src/modules/sponsorPayment/sponsorPaymentEnumerators';

export default [
  {
    name: 'sponsor',
    label: i18n('entities.sponsorPayment.fields.sponsor'),
    schema: schemas.relationToOne(
      i18n('entities.sponsorPayment.fields.sponsor'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'student',
    label: i18n('entities.sponsorPayment.fields.student'),
    schema: schemas.relationToOne(
      i18n('entities.sponsorPayment.fields.student'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'paymentDate',
    label: i18n('entities.sponsorPayment.fields.paymentDate'),
    schema: schemas.date(
      i18n('entities.sponsorPayment.fields.paymentDate'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'paymentAmount',
    label: i18n('entities.sponsorPayment.fields.paymentAmount'),
    schema: schemas.decimal(
      i18n('entities.sponsorPayment.fields.paymentAmount'),
      {
        "required": true,
        "scale": 2
      },
    ),
  },
  {
    name: 'paymentType',
    label: i18n('entities.sponsorPayment.fields.paymentType'),
    schema: schemas.enumerator(
      i18n('entities.sponsorPayment.fields.paymentType'),
      {
        "options": sponsorPaymentEnumerators.paymentType
      },
    ),
  },
  {
    name: 'feeMonths',
    label: i18n('entities.sponsorPayment.fields.feeMonths'),
    schema: schemas.string(
      i18n('entities.sponsorPayment.fields.feeMonths'),
      {
        "required": true,
        "max": 255
      },
    ),
  },
  {
    name: 'paymentNotes',
    label: i18n('entities.sponsorPayment.fields.paymentNotes'),
    schema: schemas.string(
      i18n('entities.sponsorPayment.fields.paymentNotes'),
      {},
    ),
  },
];