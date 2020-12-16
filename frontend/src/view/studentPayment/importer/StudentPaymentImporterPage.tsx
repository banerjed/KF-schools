import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/studentPayment/importer/studentPaymentImporterActions';
import fields from 'src/modules/studentPayment/importer/studentPaymentImporterFields';
import selectors from 'src/modules/studentPayment/importer/studentPaymentImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function StudentPaymentImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.studentPayment.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.studentPayment.menu'), '/student-payment'],
          [i18n('entities.studentPayment.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.studentPayment.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default StudentPaymentImportPage;
