import listActions from 'src/modules/examination/list/examinationListActions';
import ExaminationService from 'src/modules/examination/examinationService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'EXAMINATION_DESTROY';

const examinationDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: examinationDestroyActions.DESTROY_STARTED,
      });

      await ExaminationService.destroyAll([id]);

      dispatch({
        type: examinationDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.examination.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/examination');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: examinationDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: examinationDestroyActions.DESTROY_ALL_STARTED,
      });

      await ExaminationService.destroyAll(ids);

      dispatch({
        type: examinationDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.examination.destroyAll.success'),
      );

      getHistory().push('/examination');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: examinationDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default examinationDestroyActions;
