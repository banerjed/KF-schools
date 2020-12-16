import list from 'src/modules/staff/list/staffListReducers';
import form from 'src/modules/staff/form/staffFormReducers';
import view from 'src/modules/staff/view/staffViewReducers';
import destroy from 'src/modules/staff/destroy/staffDestroyReducers';
import importerReducer from 'src/modules/staff/importer/staffImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
