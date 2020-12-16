import SubjectService from 'src/modules/subject/subjectService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SUBJECT_FORM';

const subjectFormActions = {
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
        type: subjectFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await SubjectService.find(id);
      }

      dispatch({
        type: subjectFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: subjectFormActions.INIT_ERROR,
      });

      getHistory().push('/subject');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: subjectFormActions.CREATE_STARTED,
      });

      await SubjectService.create(values);

      dispatch({
        type: subjectFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.subject.create.success'),
      );

      getHistory().push('/subject');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: subjectFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: subjectFormActions.UPDATE_STARTED,
      });

      await SubjectService.update(id, values);

      dispatch({
        type: subjectFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.subject.update.success'),
      );

      getHistory().push('/subject');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: subjectFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default subjectFormActions;
