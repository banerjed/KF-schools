import { createSelector } from 'reselect';

const selectRaw = (state) => state.school.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const schoolDestroySelectors = {
  selectLoading,
};

export default schoolDestroySelectors;
