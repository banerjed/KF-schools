import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/staffAttendance/importer/staffAttendanceImporterSelectors';
import StaffAttendanceService from 'src/modules/staffAttendance/staffAttendanceService';
import fields from 'src/modules/staffAttendance/importer/staffAttendanceImporterFields';
import { i18n } from 'src/i18n';

const staffAttendanceImporterActions = importerActions(
  'STAFFATTENDANCE_IMPORTER',
  selectors,
  StaffAttendanceService.import,
  fields,
  i18n('entities.staffAttendance.importer.fileName'),
);

export default staffAttendanceImporterActions;