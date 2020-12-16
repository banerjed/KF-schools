import listActions from 'src/modules/school/list/schoolListActions';
import SchoolService from 'src/modules/school/schoolService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SCHOOL_DESTROY';

const schoolDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: schoolDestroyActions.DESTROY_STARTED,
      });

      await SchoolService.destroyAll([id]);

      dispatch({
        type: schoolDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.school.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/school');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: schoolDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: schoolDestroyActions.DESTROY_ALL_STARTED,
      });

      await SchoolService.destroyAll(ids);

      dispatch({
        type: schoolDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.school.destroyAll.success'),
      );

      getHistory().push('/school');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: schoolDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default schoolDestroyActions;
