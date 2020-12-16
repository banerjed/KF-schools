import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/school/importer/schoolImporterSelectors';
import SchoolService from 'src/modules/school/schoolService';
import fields from 'src/modules/school/importer/schoolImporterFields';
import { i18n } from 'src/i18n';

const schoolImporterActions = importerActions(
  'SCHOOL_IMPORTER',
  selectors,
  SchoolService.import,
  fields,
  i18n('entities.school.importer.fileName'),
);

export default schoolImporterActions;