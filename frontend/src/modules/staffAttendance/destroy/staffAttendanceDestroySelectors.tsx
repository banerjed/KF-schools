import { createSelector } from 'reselect';

const selectRaw = (state) => state.staffAttendance.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const staffAttendanceDestroySelectors = {
  selectLoading,
};

export default staffAttendanceDestroySelectors;
