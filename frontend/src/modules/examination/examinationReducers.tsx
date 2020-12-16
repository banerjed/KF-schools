import list from 'src/modules/examination/list/examinationListReducers';
import form from 'src/modules/examination/form/examinationFormReducers';
import view from 'src/modules/examination/view/examinationViewReducers';
import destroy from 'src/modules/examination/destroy/examinationDestroyReducers';
import importerReducer from 'src/modules/examination/importer/examinationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
