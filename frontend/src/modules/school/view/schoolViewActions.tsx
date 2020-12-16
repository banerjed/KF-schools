import SchoolService from 'src/modules/school/schoolService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SCHOOL_VIEW';

const schoolViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: schoolViewActions.FIND_STARTED,
      });

      const record = await SchoolService.find(id);

      dispatch({
        type: schoolViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: schoolViewActions.FIND_ERROR,
      });

      getHistory().push('/school');
    }
  },
};

export default schoolViewActions;
