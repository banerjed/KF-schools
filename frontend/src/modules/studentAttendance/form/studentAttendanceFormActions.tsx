import StudentAttendanceService from 'src/modules/studentAttendance/studentAttendanceService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'STUDENTATTENDANCE_FORM';

const studentAttendanceFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: studentAttendanceFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await StudentAttendanceService.find(id);
      }

      dispatch({
        type: studentAttendanceFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: studentAttendanceFormActions.INIT_ERROR,
      });

      getHistory().push('/student-attendance');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: studentAttendanceFormActions.CREATE_STARTED,
      });

      await StudentAttendanceService.create(values);

      dispatch({
        type: studentAttendanceFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.studentAttendance.create.success'),
      );

      getHistory().push('/student-attendance');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: studentAttendanceFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: studentAttendanceFormActions.UPDATE_STARTED,
      });

      await StudentAttendanceService.update(id, values);

      dispatch({
        type: studentAttendanceFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.studentAttendance.update.success'),
      );

      getHistory().push('/student-attendance');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: studentAttendanceFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default studentAttendanceFormActions;
