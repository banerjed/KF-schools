import StudentDocService from 'src/modules/studentDoc/studentDocService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'STUDENTDOC_VIEW';

const studentDocViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: studentDocViewActions.FIND_STARTED,
      });

      const record = await StudentDocService.find(id);

      dispatch({
        type: studentDocViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: studentDocViewActions.FIND_ERROR,
      });

      getHistory().push('/student-doc');
    }
  },
};

export default studentDocViewActions;
