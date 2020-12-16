import SponsorService from 'src/modules/sponsor/sponsorService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SPONSOR_VIEW';

const sponsorViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: sponsorViewActions.FIND_STARTED,
      });

      const record = await SponsorService.find(id);

      dispatch({
        type: sponsorViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sponsorViewActions.FIND_ERROR,
      });

      getHistory().push('/sponsor');
    }
  },
};

export default sponsorViewActions;
