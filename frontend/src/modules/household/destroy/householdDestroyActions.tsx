import listActions from 'src/modules/household/list/householdListActions';
import HouseholdService from 'src/modules/household/householdService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'HOUSEHOLD_DESTROY';

const householdDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: householdDestroyActions.DESTROY_STARTED,
      });

      await HouseholdService.destroyAll([id]);

      dispatch({
        type: householdDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.household.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/household');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: householdDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: householdDestroyActions.DESTROY_ALL_STARTED,
      });

      await HouseholdService.destroyAll(ids);

      dispatch({
        type: householdDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.household.destroyAll.success'),
      );

      getHistory().push('/household');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: householdDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default householdDestroyActions;
