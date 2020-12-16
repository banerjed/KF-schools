import { createSelector } from 'reselect';

const selectRaw = (state) => state.sponsor.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const sponsorDestroySelectors = {
  selectLoading,
};

export default sponsorDestroySelectors;
