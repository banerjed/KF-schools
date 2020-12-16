import { createSelector } from 'reselect';

const selectRaw = (state) => state.studentPayment.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const studentPaymentDestroySelectors = {
  selectLoading,
};

export default studentPaymentDestroySelectors;
