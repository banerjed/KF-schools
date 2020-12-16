import CourseService from 'src/modules/course/courseService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'COURSE_VIEW';

const courseViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: courseViewActions.FIND_STARTED,
      });

      const record = await CourseService.find(id);

      dispatch({
        type: courseViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseViewActions.FIND_ERROR,
      });

      getHistory().push('/course');
    }
  },
};

export default courseViewActions;
