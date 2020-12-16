import { createSelector } from 'reselect';

const selectRaw = (state) => state.course.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const courseViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default courseViewSelectors;
