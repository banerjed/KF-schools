import EnrollmentService from 'src/modules/enrollment/enrollmentService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ENROLLMENT_FORM';

const enrollmentFormActions = {
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
        type: enrollmentFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await EnrollmentService.find(id);
      }

      dispatch({
        type: enrollmentFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: enrollmentFormActions.INIT_ERROR,
      });

      getHistory().push('/enrollment');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: enrollmentFormActions.CREATE_STARTED,
      });

      await EnrollmentService.create(values);

      dispatch({
        type: enrollmentFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.enrollment.create.success'),
      );

      getHistory().push('/enrollment');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: enrollmentFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: enrollmentFormActions.UPDATE_STARTED,
      });

      await EnrollmentService.update(id, values);

      dispatch({
        type: enrollmentFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.enrollment.update.success'),
      );

      getHistory().push('/enrollment');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: enrollmentFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default enrollmentFormActions;
