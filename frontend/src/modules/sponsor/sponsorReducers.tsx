import list from 'src/modules/sponsor/list/sponsorListReducers';
import form from 'src/modules/sponsor/form/sponsorFormReducers';
import view from 'src/modules/sponsor/view/sponsorViewReducers';
import destroy from 'src/modules/sponsor/destroy/sponsorDestroyReducers';
import importerReducer from 'src/modules/sponsor/importer/sponsorImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
