import SubjectService from 'src/modules/subject/subjectService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SUBJECT_VIEW';

const subjectViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: subjectViewActions.FIND_STARTED,
      });

      const record = await SubjectService.find(id);

      dispatch({
        type: subjectViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: subjectViewActions.FIND_ERROR,
      });

      getHistory().push('/subject');
    }
  },
};

export default subjectViewActions;
