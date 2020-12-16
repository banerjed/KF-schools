import listActions from 'src/modules/student/list/studentListActions';
import StudentService from 'src/modules/student/studentService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'STUDENT_DESTROY';

const studentDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: studentDestroyActions.DESTROY_STARTED,
      });

      await StudentService.destroyAll([id]);

      dispatch({
        type: studentDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.student.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/student');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: studentDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: studentDestroyActions.DESTROY_ALL_STARTED,
      });

      await StudentService.destroyAll(ids);

      dispatch({
        type: studentDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.student.destroyAll.success'),
      );

      getHistory().push('/student');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: studentDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default studentDestroyActions;
