import StudentService from 'src/modules/student/studentService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'STUDENT_VIEW';

const studentViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: studentViewActions.FIND_STARTED,
      });

      const record = await StudentService.find(id);

      dispatch({
        type: studentViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: studentViewActions.FIND_ERROR,
      });

      getHistory().push('/student');
    }
  },
};

export default studentViewActions;
