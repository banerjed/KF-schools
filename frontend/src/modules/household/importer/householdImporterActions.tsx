import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/household/importer/householdImporterSelectors';
import HouseholdService from 'src/modules/household/householdService';
import fields from 'src/modules/household/importer/householdImporterFields';
import { i18n } from 'src/i18n';

const householdImporterActions = importerActions(
  'HOUSEHOLD_IMPORTER',
  selectors,
  HouseholdService.import,
  fields,
  i18n('entities.household.importer.fileName'),
);

export default householdImporterActions;