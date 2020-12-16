import AssignmentResultService from 'src/modules/assignmentResult/assignmentResultService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ASSIGNMENTRESULT_FORM';

const assignmentResultFormActions = {
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
        type: assignmentResultFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await AssignmentResultService.find(id);
      }

      dispatch({
        type: assignmentResultFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: assignmentResultFormActions.INIT_ERROR,
      });

      getHistory().push('/assignment-result');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: assignmentResultFormActions.CREATE_STARTED,
      });

      await AssignmentResultService.create(values);

      dispatch({
        type: assignmentResultFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.assignmentResult.create.success'),
      );

      getHistory().push('/assignment-result');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: assignmentResultFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: assignmentResultFormActions.UPDATE_STARTED,
      });

      await AssignmentResultService.update(id, values);

      dispatch({
        type: assignmentResultFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.assignmentResult.update.success'),
      );

      getHistory().push('/assignment-result');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: assignmentResultFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default assignmentResultFormActions;
