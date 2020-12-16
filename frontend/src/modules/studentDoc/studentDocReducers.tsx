import list from 'src/modules/studentDoc/list/studentDocListReducers';
import form from 'src/modules/studentDoc/form/studentDocFormReducers';
import view from 'src/modules/studentDoc/view/studentDocViewReducers';
import destroy from 'src/modules/studentDoc/destroy/studentDocDestroyReducers';
import importerReducer from 'src/modules/studentDoc/importer/studentDocImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
