import React from 'react';
import { i18n } from 'src/i18n';
import StaffListFilter from 'src/view/staff/list/StaffListFilter';
import StaffListTable from 'src/view/staff/list/StaffListTable';
import StaffListToolbar from 'src/view/staff/list/StaffListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function StaffListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.staff.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.staff.list.title')}
        </PageTitle>

        <StaffListToolbar />
        <StaffListFilter />
        <StaffListTable />
      </ContentWrapper>
    </>
  );
}

export default StaffListPage;
