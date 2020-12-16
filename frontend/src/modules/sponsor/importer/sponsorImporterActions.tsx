import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/sponsor/importer/sponsorImporterSelectors';
import SponsorService from 'src/modules/sponsor/sponsorService';
import fields from 'src/modules/sponsor/importer/sponsorImporterFields';
import { i18n } from 'src/i18n';

const sponsorImporterActions = importerActions(
  'SPONSOR_IMPORTER',
  selectors,
  SponsorService.import,
  fields,
  i18n('entities.sponsor.importer.fileName'),
);

export default sponsorImporterActions;