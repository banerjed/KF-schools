import { createSelector } from 'reselect';

const selectRaw = (state) => state.studentPayment.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const studentPaymentViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default studentPaymentViewSelectors;
