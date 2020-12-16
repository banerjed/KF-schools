import ExamResultService from 'src/modules/examResult/examResultService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'EXAMRESULT_FORM';

const examResultFormActions = {
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
        type: examResultFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ExamResultService.find(id);
      }

      dispatch({
        type: examResultFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: examResultFormActions.INIT_ERROR,
      });

      getHistory().push('/exam-result');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: examResultFormActions.CREATE_STARTED,
      });

      await ExamResultService.create(values);

      dispatch({
        type: examResultFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.examResult.create.success'),
      );

      getHistory().push('/exam-result');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: examResultFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: examResultFormActions.UPDATE_STARTED,
      });

      await ExamResultService.update(id, values);

      dispatch({
        type: examResultFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.examResult.update.success'),
      );

      getHistory().push('/exam-result');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: examResultFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default examResultFormActions;
