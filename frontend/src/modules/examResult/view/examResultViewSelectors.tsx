import { createSelector } from 'reselect';

const selectRaw = (state) => state.examResult.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const examResultViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default examResultViewSelectors;
