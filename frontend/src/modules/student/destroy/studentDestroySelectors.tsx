import { createSelector } from 'reselect';

const selectRaw = (state) => state.student.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const studentDestroySelectors = {
  selectLoading,
};

export default studentDestroySelectors;
