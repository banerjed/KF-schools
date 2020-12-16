import ExamResultService from 'src/modules/examResult/examResultService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'EXAMRESULT_VIEW';

const examResultViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: examResultViewActions.FIND_STARTED,
      });

      const record = await ExamResultService.find(id);

      dispatch({
        type: examResultViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: examResultViewActions.FIND_ERROR,
      });

      getHistory().push('/exam-result');
    }
  },
};

export default examResultViewActions;
