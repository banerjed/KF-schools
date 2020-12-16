import { createSelector } from 'reselect';

const selectRaw = (state) => state.studentDoc.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const studentDocViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default studentDocViewSelectors;
