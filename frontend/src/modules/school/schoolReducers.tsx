import list from 'src/modules/school/list/schoolListReducers';
import form from 'src/modules/school/form/schoolFormReducers';
import view from 'src/modules/school/view/schoolViewReducers';
import destroy from 'src/modules/school/destroy/schoolDestroyReducers';
import importerReducer from 'src/modules/school/importer/schoolImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
