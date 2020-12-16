import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/studentDoc/importer/studentDocImporterSelectors';
import StudentDocService from 'src/modules/studentDoc/studentDocService';
import fields from 'src/modules/studentDoc/importer/studentDocImporterFields';
import { i18n } from 'src/i18n';

const studentDocImporterActions = importerActions(
  'STUDENTDOC_IMPORTER',
  selectors,
  StudentDocService.import,
  fields,
  i18n('entities.studentDoc.importer.fileName'),
);

export default studentDocImporterActions;