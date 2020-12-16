import AssignmentResultService from 'src/modules/assignmentResult/assignmentResultService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ASSIGNMENTRESULT_VIEW';

const assignmentResultViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: assignmentResultViewActions.FIND_STARTED,
      });

      const record = await AssignmentResultService.find(id);

      dispatch({
        type: assignmentResultViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: assignmentResultViewActions.FIND_ERROR,
      });

      getHistory().push('/assignment-result');
    }
  },
};

export default assignmentResultViewActions;
