import { createSelector } from 'reselect';

const selectRaw = (state) => state.reportCard.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const reportCardViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default reportCardViewSelectors;
