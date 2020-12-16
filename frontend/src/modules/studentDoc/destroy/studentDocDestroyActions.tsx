import listActions from 'src/modules/studentDoc/list/studentDocListActions';
import StudentDocService from 'src/modules/studentDoc/studentDocService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'STUDENTDOC_DESTROY';

const studentDocDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: studentDocDestroyActions.DESTROY_STARTED,
      });

      await StudentDocService.destroyAll([id]);

      dispatch({
        type: studentDocDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.studentDoc.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/student-doc');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: studentDocDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: studentDocDestroyActions.DESTROY_ALL_STARTED,
      });

      await StudentDocService.destroyAll(ids);

      dispatch({
        type: studentDocDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.studentDoc.destroyAll.success'),
      );

      getHistory().push('/student-doc');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: studentDocDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default studentDocDestroyActions;
