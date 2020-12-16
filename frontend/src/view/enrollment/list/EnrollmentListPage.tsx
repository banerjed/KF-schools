import React from 'react';
import { i18n } from 'src/i18n';
import EnrollmentListFilter from 'src/view/enrollment/list/EnrollmentListFilter';
import EnrollmentListTable from 'src/view/enrollment/list/EnrollmentListTable';
import EnrollmentListToolbar from 'src/view/enrollment/list/EnrollmentListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function EnrollmentListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.enrollment.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.enrollment.list.title')}
        </PageTitle>

        <EnrollmentListToolbar />
        <EnrollmentListFilter />
        <EnrollmentListTable />
      </ContentWrapper>
    </>
  );
}

export default EnrollmentListPage;
