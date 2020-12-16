import listActions from 'src/modules/sponsor/list/sponsorListActions';
import SponsorService from 'src/modules/sponsor/sponsorService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SPONSOR_DESTROY';

const sponsorDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: sponsorDestroyActions.DESTROY_STARTED,
      });

      await SponsorService.destroyAll([id]);

      dispatch({
        type: sponsorDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.sponsor.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/sponsor');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: sponsorDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: sponsorDestroyActions.DESTROY_ALL_STARTED,
      });

      await SponsorService.destroyAll(ids);

      dispatch({
        type: sponsorDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.sponsor.destroyAll.success'),
      );

      getHistory().push('/sponsor');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: sponsorDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default sponsorDestroyActions;
