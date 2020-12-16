import ExaminationService from 'src/modules/examination/examinationService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'EXAMINATION_VIEW';

const examinationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: examinationViewActions.FIND_STARTED,
      });

      const record = await ExaminationService.find(id);

      dispatch({
        type: examinationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: examinationViewActions.FIND_ERROR,
      });

      getHistory().push('/examination');
    }
  },
};

export default examinationViewActions;
