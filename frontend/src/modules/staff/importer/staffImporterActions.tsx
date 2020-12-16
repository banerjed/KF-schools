import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/staff/importer/staffImporterSelectors';
import StaffService from 'src/modules/staff/staffService';
import fields from 'src/modules/staff/importer/staffImporterFields';
import { i18n } from 'src/i18n';

const staffImporterActions = importerActions(
  'STAFF_IMPORTER',
  selectors,
  StaffService.import,
  fields,
  i18n('entities.staff.importer.fileName'),
);

export default staffImporterActions;