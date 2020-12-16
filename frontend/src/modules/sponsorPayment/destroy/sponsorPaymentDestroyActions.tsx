import listActions from 'src/modules/sponsorPayment/list/sponsorPaymentListActions';
import SponsorPaymentService from 'src/modules/sponsorPayment/sponsorPaymentService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SPONSORPAYMENT_DESTROY';

const sponsorPaymentDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: sponsorPaymentDestroyActions.DESTROY_STARTED,
      });

      await SponsorPaymentService.destroyAll([id]);

      dispatch({
        type: sponsorPaymentDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.sponsorPayment.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/sponsor-payment');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: sponsorPaymentDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: sponsorPaymentDestroyActions.DESTROY_ALL_STARTED,
      });

      await SponsorPaymentService.destroyAll(ids);

      dispatch({
        type: sponsorPaymentDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.sponsorPayment.destroyAll.success'),
      );

      getHistory().push('/sponsor-payment');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: sponsorPaymentDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default sponsorPaymentDestroyActions;
