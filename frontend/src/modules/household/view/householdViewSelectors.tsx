import { createSelector } from 'reselect';

const selectRaw = (state) => state.household.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const householdViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default householdViewSelectors;
