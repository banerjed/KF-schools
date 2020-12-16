import { createSelector } from 'reselect';

const selectRaw = (state) => state.staff.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const staffDestroySelectors = {
  selectLoading,
};

export default staffDestroySelectors;
