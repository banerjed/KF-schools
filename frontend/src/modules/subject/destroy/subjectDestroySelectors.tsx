import { createSelector } from 'reselect';

const selectRaw = (state) => state.subject.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const subjectDestroySelectors = {
  selectLoading,
};

export default subjectDestroySelectors;
