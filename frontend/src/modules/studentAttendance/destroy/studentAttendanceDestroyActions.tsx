import listActions from 'src/modules/studentAttendance/list/studentAttendanceListActions';
import StudentAttendanceService from 'src/modules/studentAttendance/studentAttendanceService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'STUDENTATTENDANCE_DESTROY';

const studentAttendanceDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: studentAttendanceDestroyActions.DESTROY_STARTED,
      });

      await StudentAttendanceService.destroyAll([id]);

      dispatch({
        type: studentAttendanceDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.studentAttendance.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/student-attendance');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: studentAttendanceDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: studentAttendanceDestroyActions.DESTROY_ALL_STARTED,
      });

      await StudentAttendanceService.destroyAll(ids);

      dispatch({
        type: studentAttendanceDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.studentAttendance.destroyAll.success'),
      );

      getHistory().push('/student-attendance');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: studentAttendanceDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default studentAttendanceDestroyActions;
