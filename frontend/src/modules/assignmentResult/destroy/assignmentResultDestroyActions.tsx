import listActions from 'src/modules/assignmentResult/list/assignmentResultListActions';
import AssignmentResultService from 'src/modules/assignmentResult/assignmentResultService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ASSIGNMENTRESULT_DESTROY';

const assignmentResultDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: assignmentResultDestroyActions.DESTROY_STARTED,
      });

      await AssignmentResultService.destroyAll([id]);

      dispatch({
        type: assignmentResultDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.assignmentResult.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/assignment-result');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: assignmentResultDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: assignmentResultDestroyActions.DESTROY_ALL_STARTED,
      });

      await AssignmentResultService.destroyAll(ids);

      dispatch({
        type: assignmentResultDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.assignmentResult.destroyAll.success'),
      );

      getHistory().push('/assignment-result');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: assignmentResultDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default assignmentResultDestroyActions;
