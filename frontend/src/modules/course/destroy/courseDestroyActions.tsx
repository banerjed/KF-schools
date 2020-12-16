import listActions from 'src/modules/course/list/courseListActions';
import CourseService from 'src/modules/course/courseService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'COURSE_DESTROY';

const courseDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: courseDestroyActions.DESTROY_STARTED,
      });

      await CourseService.destroyAll([id]);

      dispatch({
        type: courseDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.course.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/course');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: courseDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: courseDestroyActions.DESTROY_ALL_STARTED,
      });

      await CourseService.destroyAll(ids);

      dispatch({
        type: courseDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.course.destroyAll.success'),
      );

      getHistory().push('/course');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: courseDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default courseDestroyActions;
