import { createSelector } from 'reselect';

const selectRaw = (state) => state.staff.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const staffViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default staffViewSelectors;
