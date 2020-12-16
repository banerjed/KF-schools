import { createSelector } from 'reselect';

const selectRaw = (state) => state.enrollment.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const enrollmentDestroySelectors = {
  selectLoading,
};

export default enrollmentDestroySelectors;
