import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/sponsorPayment/importer/sponsorPaymentImporterActions';
import fields from 'src/modules/sponsorPayment/importer/sponsorPaymentImporterFields';
import selectors from 'src/modules/sponsorPayment/importer/sponsorPaymentImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SponsorPaymentImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.sponsorPayment.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.sponsorPayment.menu'), '/sponsor-payment'],
          [i18n('entities.sponsorPayment.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.sponsorPayment.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default SponsorPaymentImportPage;
