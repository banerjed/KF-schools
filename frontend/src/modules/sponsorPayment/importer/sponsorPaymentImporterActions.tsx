import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/sponsorPayment/importer/sponsorPaymentImporterSelectors';
import SponsorPaymentService from 'src/modules/sponsorPayment/sponsorPaymentService';
import fields from 'src/modules/sponsorPayment/importer/sponsorPaymentImporterFields';
import { i18n } from 'src/i18n';

const sponsorPaymentImporterActions = importerActions(
  'SPONSORPAYMENT_IMPORTER',
  selectors,
  SponsorPaymentService.import,
  fields,
  i18n('entities.sponsorPayment.importer.fileName'),
);

export default sponsorPaymentImporterActions;