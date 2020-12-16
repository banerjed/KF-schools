import StudentPaymentService from 'src/modules/studentPayment/studentPaymentService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'STUDENTPAYMENT_VIEW';

const studentPaymentViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: studentPaymentViewActions.FIND_STARTED,
      });

      const record = await StudentPaymentService.find(id);

      dispatch({
        type: studentPaymentViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: studentPaymentViewActions.FIND_ERROR,
      });

      getHistory().push('/student-payment');
    }
  },
};

export default studentPaymentViewActions;
