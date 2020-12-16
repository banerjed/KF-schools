import StaffService from 'src/modules/staff/staffService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'STAFF_VIEW';

const staffViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: staffViewActions.FIND_STARTED,
      });

      const record = await StaffService.find(id);

      dispatch({
        type: staffViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: staffViewActions.FIND_ERROR,
      });

      getHistory().push('/staff');
    }
  },
};

export default staffViewActions;
