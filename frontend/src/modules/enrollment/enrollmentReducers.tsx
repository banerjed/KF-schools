import list from 'src/modules/enrollment/list/enrollmentListReducers';
import form from 'src/modules/enrollment/form/enrollmentFormReducers';
import view from 'src/modules/enrollment/view/enrollmentViewReducers';
import destroy from 'src/modules/enrollment/destroy/enrollmentDestroyReducers';
import importerReducer from 'src/modules/enrollment/importer/enrollmentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
