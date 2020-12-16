import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/course/importer/courseImporterSelectors';
import CourseService from 'src/modules/course/courseService';
import fields from 'src/modules/course/importer/courseImporterFields';
import { i18n } from 'src/i18n';

const courseImporterActions = importerActions(
  'COURSE_IMPORTER',
  selectors,
  CourseService.import,
  fields,
  i18n('entities.course.importer.fileName'),
);

export default courseImporterActions;