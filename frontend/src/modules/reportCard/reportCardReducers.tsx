import list from 'src/modules/reportCard/list/reportCardListReducers';
import form from 'src/modules/reportCard/form/reportCardFormReducers';
import view from 'src/modules/reportCard/view/reportCardViewReducers';
import destroy from 'src/modules/reportCard/destroy/reportCardDestroyReducers';
import importerReducer from 'src/modules/reportCard/importer/reportCardImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
