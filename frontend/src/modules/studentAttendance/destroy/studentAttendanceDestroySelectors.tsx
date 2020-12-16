import { createSelector } from 'reselect';

const selectRaw = (state) => state.studentAttendance.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const studentAttendanceDestroySelectors = {
  selectLoading,
};

export default studentAttendanceDestroySelectors;
