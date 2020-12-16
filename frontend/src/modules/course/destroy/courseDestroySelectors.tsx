import { createSelector } from 'reselect';

const selectRaw = (state) => state.course.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const courseDestroySelectors = {
  selectLoading,
};

export default courseDestroySelectors;
