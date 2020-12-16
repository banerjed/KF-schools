import { createSelector } from 'reselect';

const selectRaw = (state) => state.assignmentResult.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const assignmentResultDestroySelectors = {
  selectLoading,
};

export default assignmentResultDestroySelectors;
