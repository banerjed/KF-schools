import listActions from 'src/modules/enrollment/list/enrollmentListActions';
import EnrollmentService from 'src/modules/enrollment/enrollmentService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ENROLLMENT_DESTROY';

const enrollmentDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: enrollmentDestroyActions.DESTROY_STARTED,
      });

      await EnrollmentService.destroyAll([id]);

      dispatch({
        type: enrollmentDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.enrollment.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/enrollment');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: enrollmentDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: enrollmentDestroyActions.DESTROY_ALL_STARTED,
      });

      await EnrollmentService.destroyAll(ids);

      dispatch({
        type: enrollmentDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.enrollment.destroyAll.success'),
      );

      getHistory().push('/enrollment');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: enrollmentDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default enrollmentDestroyActions;
