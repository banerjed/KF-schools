import StaffService from 'src/modules/staff/staffService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'STAFF_FORM';

const staffFormActions = {
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
        type: staffFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await StaffService.find(id);
      }

      dispatch({
        type: staffFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: staffFormActions.INIT_ERROR,
      });

      getHistory().push('/staff');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: staffFormActions.CREATE_STARTED,
      });

      await StaffService.create(values);

      dispatch({
        type: staffFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.staff.create.success'),
      );

      getHistory().push('/staff');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: staffFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: staffFormActions.UPDATE_STARTED,
      });

      await StaffService.update(id, values);

      dispatch({
        type: staffFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.staff.update.success'),
      );

      getHistory().push('/staff');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: staffFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default staffFormActions;
