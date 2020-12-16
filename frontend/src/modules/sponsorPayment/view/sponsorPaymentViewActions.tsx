import SponsorPaymentService from 'src/modules/sponsorPayment/sponsorPaymentService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SPONSORPAYMENT_VIEW';

const sponsorPaymentViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: sponsorPaymentViewActions.FIND_STARTED,
      });

      const record = await SponsorPaymentService.find(id);

      dispatch({
        type: sponsorPaymentViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sponsorPaymentViewActions.FIND_ERROR,
      });

      getHistory().push('/sponsor-payment');
    }
  },
};

export default sponsorPaymentViewActions;
