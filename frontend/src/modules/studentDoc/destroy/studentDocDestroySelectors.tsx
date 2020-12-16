import { createSelector } from 'reselect';

const selectRaw = (state) => state.studentDoc.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const studentDocDestroySelectors = {
  selectLoading,
};

export default studentDocDestroySelectors;
