import EnrollmentService from 'src/modules/enrollment/enrollmentService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ENROLLMENT_VIEW';

const enrollmentViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: enrollmentViewActions.FIND_STARTED,
      });

      const record = await EnrollmentService.find(id);

      dispatch({
        type: enrollmentViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: enrollmentViewActions.FIND_ERROR,
      });

      getHistory().push('/enrollment');
    }
  },
};

export default enrollmentViewActions;
