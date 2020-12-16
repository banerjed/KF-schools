import { createSelector } from 'reselect';

const selectRaw = (state) => state.sponsorPayment.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const sponsorPaymentViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default sponsorPaymentViewSelectors;
