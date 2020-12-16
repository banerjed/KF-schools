import ExaminationService from 'src/modules/examination/examinationService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'EXAMINATION_FORM';

const examinationFormActions = {
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
        type: examinationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ExaminationService.find(id);
      }

      dispatch({
        type: examinationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: examinationFormActions.INIT_ERROR,
      });

      getHistory().push('/examination');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: examinationFormActions.CREATE_STARTED,
      });

      await ExaminationService.create(values);

      dispatch({
        type: examinationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.examination.create.success'),
      );

      getHistory().push('/examination');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: examinationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: examinationFormActions.UPDATE_STARTED,
      });

      await ExaminationService.update(id, values);

      dispatch({
        type: examinationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.examination.update.success'),
      );

      getHistory().push('/examination');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: examinationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default examinationFormActions;
