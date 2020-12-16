import list from 'src/modules/household/list/householdListReducers';
import form from 'src/modules/household/form/householdFormReducers';
import view from 'src/modules/household/view/householdViewReducers';
import destroy from 'src/modules/household/destroy/householdDestroyReducers';
import importerReducer from 'src/modules/household/importer/householdImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
