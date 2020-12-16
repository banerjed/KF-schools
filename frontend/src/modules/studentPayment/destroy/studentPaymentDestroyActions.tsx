import listActions from 'src/modules/studentPayment/list/studentPaymentListActions';
import StudentPaymentService from 'src/modules/studentPayment/studentPaymentService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'STUDENTPAYMENT_DESTROY';

const studentPaymentDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: studentPaymentDestroyActions.DESTROY_STARTED,
      });

      await StudentPaymentService.destroyAll([id]);

      dispatch({
        type: studentPaymentDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.studentPayment.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/student-payment');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: studentPaymentDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: studentPaymentDestroyActions.DESTROY_ALL_STARTED,
      });

      await StudentPaymentService.destroyAll(ids);

      dispatch({
        type: studentPaymentDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.studentPayment.destroyAll.success'),
      );

      getHistory().push('/student-payment');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: studentPaymentDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default studentPaymentDestroyActions;
