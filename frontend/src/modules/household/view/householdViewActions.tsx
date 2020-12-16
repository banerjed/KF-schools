import HouseholdService from 'src/modules/household/householdService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'HOUSEHOLD_VIEW';

const householdViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: householdViewActions.FIND_STARTED,
      });

      const record = await HouseholdService.find(id);

      dispatch({
        type: householdViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: householdViewActions.FIND_ERROR,
      });

      getHistory().push('/household');
    }
  },
};

export default householdViewActions;
