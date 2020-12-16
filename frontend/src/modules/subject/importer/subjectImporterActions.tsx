import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/subject/importer/subjectImporterSelectors';
import SubjectService from 'src/modules/subject/subjectService';
import fields from 'src/modules/subject/importer/subjectImporterFields';
import { i18n } from 'src/i18n';

const subjectImporterActions = importerActions(
  'SUBJECT_IMPORTER',
  selectors,
  SubjectService.import,
  fields,
  i18n('entities.subject.importer.fileName'),
);

export default subjectImporterActions;