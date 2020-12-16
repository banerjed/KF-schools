import { createSelector } from 'reselect';

const selectRaw = (state) => state.sponsor.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const sponsorViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default sponsorViewSelectors;
