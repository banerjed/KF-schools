import { createSelector } from 'reselect';

const selectRaw = (state) => state.reportCard.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const reportCardDestroySelectors = {
  selectLoading,
};

export default reportCardDestroySelectors;
