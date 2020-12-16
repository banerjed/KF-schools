import { createSelector } from 'reselect';

const selectRaw = (state) => state.examination.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const examinationDestroySelectors = {
  selectLoading,
};

export default examinationDestroySelectors;
