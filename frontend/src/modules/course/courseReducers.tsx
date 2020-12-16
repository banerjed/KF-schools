import list from 'src/modules/course/list/courseListReducers';
import form from 'src/modules/course/form/courseFormReducers';
import view from 'src/modules/course/view/courseViewReducers';
import destroy from 'src/modules/course/destroy/courseDestroyReducers';
import importerReducer from 'src/modules/course/importer/courseImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
