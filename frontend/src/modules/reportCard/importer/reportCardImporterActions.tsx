import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/reportCard/importer/reportCardImporterSelectors';
import ReportCardService from 'src/modules/reportCard/reportCardService';
import fields from 'src/modules/reportCard/importer/reportCardImporterFields';
import { i18n } from 'src/i18n';

const reportCardImporterActions = importerActions(
  'REPORTCARD_IMPORTER',
  selectors,
  ReportCardService.import,
  fields,
  i18n('entities.reportCard.importer.fileName'),
);

export default reportCardImporterActions;