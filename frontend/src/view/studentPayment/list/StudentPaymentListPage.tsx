import React from 'react';
import { i18n } from 'src/i18n';
import StudentPaymentListFilter from 'src/view/studentPayment/list/StudentPaymentListFilter';
import StudentPaymentListTable from 'src/view/studentPayment/list/StudentPaymentListTable';
import StudentPaymentListToolbar from 'src/view/studentPayment/list/StudentPaymentListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function StudentPaymentListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.studentPayment.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.studentPayment.list.title')}
        </PageTitle>

        <StudentPaymentListToolbar />
        <StudentPaymentListFilter />
        <StudentPaymentListTable />
      </ContentWrapper>
    </>
  );
}

export default StudentPaymentListPage;
