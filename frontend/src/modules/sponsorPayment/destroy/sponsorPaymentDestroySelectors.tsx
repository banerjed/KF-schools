import { createSelector } from 'reselect';

const selectRaw = (state) => state.sponsorPayment.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const sponsorPaymentDestroySelectors = {
  selectLoading,
};

export default sponsorPaymentDestroySelectors;
