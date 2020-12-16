import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/studentAttendance/importer/studentAttendanceImporterSelectors';
import StudentAttendanceService from 'src/modules/studentAttendance/studentAttendanceService';
import fields from 'src/modules/studentAttendance/importer/studentAttendanceImporterFields';
import { i18n } from 'src/i18n';

const studentAttendanceImporterActions = importerActions(
  'STUDENTATTENDANCE_IMPORTER',
  selectors,
  StudentAttendanceService.import,
  fields,
  i18n('entities.studentAttendance.importer.fileName'),
);

export default studentAttendanceImporterActions;