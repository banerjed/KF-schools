import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import studentPaymentEnumerators from 'src/modules/studentPayment/studentPaymentEnumerators';

export default [
  {
    name: 'household',
    label: i18n('entities.studentPayment.fields.household'),
    schema: schemas.relationToOne(
      i18n('entities.studentPayment.fields.household'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'student',
    label: i18n('entities.studentPayment.fields.student'),
    schema: schemas.relationToOne(
      i18n('entities.studentPayment.fields.student'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'paymentDate',
    label: i18n('entities.studentPayment.fields.paymentDate'),
    schema: schemas.date(
      i18n('entities.studentPayment.fields.paymentDate'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'paymentAmount',
    label: i18n('entities.studentPayment.fields.paymentAmount'),
    schema: schemas.decimal(
      i18n('entities.studentPayment.fields.paymentAmount'),
      {
        "required": true,
        "scale": 2
      },
    ),
  },
  {
    name: 'paymentType',
    label: i18n('entities.studentPayment.fields.paymentType'),
    schema: schemas.enumerator(
      i18n('entities.studentPayment.fields.paymentType'),
      {
        "required": true,
        "options": studentPaymentEnumerators.paymentType
      },
    ),
  },
  {
    name: 'feeMonths',
    label: i18n('entities.studentPayment.fields.feeMonths'),
    schema: schemas.string(
      i18n('entities.studentPayment.fields.feeMonths'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'paymentNotes',
    label: i18n('entities.studentPayment.fields.paymentNotes'),
    schema: schemas.string(
      i18n('entities.studentPayment.fields.paymentNotes'),
      {
        "max": 255
      },
    ),
  },
];