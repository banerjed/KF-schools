import { createSelector } from 'reselect';

const selectRaw = (state) => state.assignmentResult.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const assignmentResultViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default assignmentResultViewSelectors;
