import { createSelector } from 'reselect';

const selectRaw = (state) => state.enrollment.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const enrollmentViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default enrollmentViewSelectors;
