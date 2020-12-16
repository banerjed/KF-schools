import HouseholdService from 'src/modules/household/householdService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'HOUSEHOLD_FORM';

const householdFormActions = {
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
        type: householdFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await HouseholdService.find(id);
      }

      dispatch({
        type: householdFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: householdFormActions.INIT_ERROR,
      });

      getHistory().push('/household');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: householdFormActions.CREATE_STARTED,
      });

      await HouseholdService.create(values);

      dispatch({
        type: householdFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.household.create.success'),
      );

      getHistory().push('/household');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: householdFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: householdFormActions.UPDATE_STARTED,
      });

      await HouseholdService.update(id, values);

      dispatch({
        type: householdFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.household.update.success'),
      );

      getHistory().push('/household');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: householdFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default householdFormActions;
