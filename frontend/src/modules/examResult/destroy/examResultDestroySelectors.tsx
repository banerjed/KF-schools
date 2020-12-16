import { createSelector } from 'reselect';

const selectRaw = (state) => state.examResult.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const examResultDestroySelectors = {
  selectLoading,
};

export default examResultDestroySelectors;
