import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/examination/importer/examinationImporterSelectors';
import ExaminationService from 'src/modules/examination/examinationService';
import fields from 'src/modules/examination/importer/examinationImporterFields';
import { i18n } from 'src/i18n';

const examinationImporterActions = importerActions(
  'EXAMINATION_IMPORTER',
  selectors,
  ExaminationService.import,
  fields,
  i18n('entities.examination.importer.fileName'),
);

export default examinationImporterActions;