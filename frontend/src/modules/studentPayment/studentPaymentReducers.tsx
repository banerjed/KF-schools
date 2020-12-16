import list from 'src/modules/studentPayment/list/studentPaymentListReducers';
import form from 'src/modules/studentPayment/form/studentPaymentFormReducers';
import view from 'src/modules/studentPayment/view/studentPaymentViewReducers';
import destroy from 'src/modules/studentPayment/destroy/studentPaymentDestroyReducers';
import importerReducer from 'src/modules/studentPayment/importer/studentPaymentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
