import { createSelector } from 'reselect';

const selectRaw = (state) => state.household.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const householdDestroySelectors = {
  selectLoading,
};

export default householdDestroySelectors;
