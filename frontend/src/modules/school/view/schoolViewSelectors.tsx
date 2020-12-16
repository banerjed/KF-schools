import { createSelector } from 'reselect';

const selectRaw = (state) => state.school.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const schoolViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default schoolViewSelectors;
