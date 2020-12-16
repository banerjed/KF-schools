import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/enrollment/importer/enrollmentImporterSelectors';
import EnrollmentService from 'src/modules/enrollment/enrollmentService';
import fields from 'src/modules/enrollment/importer/enrollmentImporterFields';
import { i18n } from 'src/i18n';

const enrollmentImporterActions = importerActions(
  'ENROLLMENT_IMPORTER',
  selectors,
  EnrollmentService.import,
  fields,
  i18n('entities.enrollment.importer.fileName'),
);

export default enrollmentImporterActions;