import React from 'react';
import { i18n } from 'src/i18n';
import SponsorPaymentListFilter from 'src/view/sponsorPayment/list/SponsorPaymentListFilter';
import SponsorPaymentListTable from 'src/view/sponsorPayment/list/SponsorPaymentListTable';
import SponsorPaymentListToolbar from 'src/view/sponsorPayment/list/SponsorPaymentListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SponsorPaymentListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.sponsorPayment.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.sponsorPayment.list.title')}
        </PageTitle>

        <SponsorPaymentListToolbar />
        <SponsorPaymentListFilter />
        <SponsorPaymentListTable />
      </ContentWrapper>
    </>
  );
}

export default SponsorPaymentListPage;
