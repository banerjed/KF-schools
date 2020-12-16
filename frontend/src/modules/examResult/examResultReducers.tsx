import list from 'src/modules/examResult/list/examResultListReducers';
import form from 'src/modules/examResult/form/examResultFormReducers';
import view from 'src/modules/examResult/view/examResultViewReducers';
import destroy from 'src/modules/examResult/destroy/examResultDestroyReducers';
import importerReducer from 'src/modules/examResult/importer/examResultImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
