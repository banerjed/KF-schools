import list from 'src/modules/sponsorPayment/list/sponsorPaymentListReducers';
import form from 'src/modules/sponsorPayment/form/sponsorPaymentFormReducers';
import view from 'src/modules/sponsorPayment/view/sponsorPaymentViewReducers';
import destroy from 'src/modules/sponsorPayment/destroy/sponsorPaymentDestroyReducers';
import importerReducer from 'src/modules/sponsorPayment/importer/sponsorPaymentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
