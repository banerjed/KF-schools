import listActions from 'src/modules/staffAttendance/list/staffAttendanceListActions';
import StaffAttendanceService from 'src/modules/staffAttendance/staffAttendanceService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'STAFFATTENDANCE_DESTROY';

const staffAttendanceDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: staffAttendanceDestroyActions.DESTROY_STARTED,
      });

      await StaffAttendanceService.destroyAll([id]);

      dispatch({
        type: staffAttendanceDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.staffAttendance.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/staff-attendance');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: staffAttendanceDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: staffAttendanceDestroyActions.DESTROY_ALL_STARTED,
      });

      await StaffAttendanceService.destroyAll(ids);

      dispatch({
        type: staffAttendanceDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.staffAttendance.destroyAll.success'),
      );

      getHistory().push('/staff-attendance');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: staffAttendanceDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default staffAttendanceDestroyActions;
