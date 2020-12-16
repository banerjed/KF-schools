import StudentAttendanceService from 'src/modules/studentAttendance/studentAttendanceService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'STUDENTATTENDANCE_VIEW';

const studentAttendanceViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: studentAttendanceViewActions.FIND_STARTED,
      });

      const record = await StudentAttendanceService.find(id);

      dispatch({
        type: studentAttendanceViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: studentAttendanceViewActions.FIND_ERROR,
      });

      getHistory().push('/student-attendance');
    }
  },
};

export default studentAttendanceViewActions;
