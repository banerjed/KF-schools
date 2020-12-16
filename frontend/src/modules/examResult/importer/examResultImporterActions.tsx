import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/examResult/importer/examResultImporterSelectors';
import ExamResultService from 'src/modules/examResult/examResultService';
import fields from 'src/modules/examResult/importer/examResultImporterFields';
import { i18n } from 'src/i18n';

const examResultImporterActions = importerActions(
  'EXAMRESULT_IMPORTER',
  selectors,
  ExamResultService.import,
  fields,
  i18n('entities.examResult.importer.fileName'),
);

export default examResultImporterActions;