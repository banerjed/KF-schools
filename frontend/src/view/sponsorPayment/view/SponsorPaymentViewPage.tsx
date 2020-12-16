import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/sponsorPayment/view/sponsorPaymentViewActions';
import selectors from 'src/modules/sponsorPayment/view/sponsorPaymentViewSelectors';
import SponsorPaymentView from 'src/view/sponsorPayment/view/SponsorPaymentView';
import SponsorPaymentViewToolbar from 'src/view/sponsorPayment/view/SponsorPaymentViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SponsorPaymentPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.sponsorPayment.menu'), '/sponsor-payment'],
          [i18n('entities.sponsorPayment.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.sponsorPayment.view.title')}
        </PageTitle>

        <SponsorPaymentViewToolbar match={match} />

        <SponsorPaymentView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default SponsorPaymentPage;
