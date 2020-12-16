import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/studentPayment/importer/studentPaymentImporterSelectors';
import StudentPaymentService from 'src/modules/studentPayment/studentPaymentService';
import fields from 'src/modules/studentPayment/importer/studentPaymentImporterFields';
import { i18n } from 'src/i18n';

const studentPaymentImporterActions = importerActions(
  'STUDENTPAYMENT_IMPORTER',
  selectors,
  StudentPaymentService.import,
  fields,
  i18n('entities.studentPayment.importer.fileName'),
);

export default studentPaymentImporterActions;