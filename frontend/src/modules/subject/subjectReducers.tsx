import list from 'src/modules/subject/list/subjectListReducers';
import form from 'src/modules/subject/form/subjectFormReducers';
import view from 'src/modules/subject/view/subjectViewReducers';
import destroy from 'src/modules/subject/destroy/subjectDestroyReducers';
import importerReducer from 'src/modules/subject/importer/subjectImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
