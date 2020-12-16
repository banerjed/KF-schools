import listActions from 'src/modules/subject/list/subjectListActions';
import SubjectService from 'src/modules/subject/subjectService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SUBJECT_DESTROY';

const subjectDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: subjectDestroyActions.DESTROY_STARTED,
      });

      await SubjectService.destroyAll([id]);

      dispatch({
        type: subjectDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.subject.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/subject');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: subjectDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: subjectDestroyActions.DESTROY_ALL_STARTED,
      });

      await SubjectService.destroyAll(ids);

      dispatch({
        type: subjectDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.subject.destroyAll.success'),
      );

      getHistory().push('/subject');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: subjectDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default subjectDestroyActions;
