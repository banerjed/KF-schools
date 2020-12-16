import list from 'src/modules/assignmentResult/list/assignmentResultListReducers';
import form from 'src/modules/assignmentResult/form/assignmentResultFormReducers';
import view from 'src/modules/assignmentResult/view/assignmentResultViewReducers';
import destroy from 'src/modules/assignmentResult/destroy/assignmentResultDestroyReducers';
import importerReducer from 'src/modules/assignmentResult/importer/assignmentResultImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
