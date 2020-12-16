import { createSelector } from 'reselect';

const selectRaw = (state) => state.studentAttendance.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const studentAttendanceViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default studentAttendanceViewSelectors;
