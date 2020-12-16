import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/assignmentResult/importer/assignmentResultImporterSelectors';
import AssignmentResultService from 'src/modules/assignmentResult/assignmentResultService';
import fields from 'src/modules/assignmentResult/importer/assignmentResultImporterFields';
import { i18n } from 'src/i18n';

const assignmentResultImporterActions = importerActions(
  'ASSIGNMENTRESULT_IMPORTER',
  selectors,
  AssignmentResultService.import,
  fields,
  i18n('entities.assignmentResult.importer.fileName'),
);

export default assignmentResultImporterActions;