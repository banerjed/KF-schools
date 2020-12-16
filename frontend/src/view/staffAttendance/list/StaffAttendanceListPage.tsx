import React from 'react';
import { i18n } from 'src/i18n';
import StaffAttendanceListFilter from 'src/view/staffAttendance/list/StaffAttendanceListFilter';
import StaffAttendanceListTable from 'src/view/staffAttendance/list/StaffAttendanceListTable';
import StaffAttendanceListToolbar from 'src/view/staffAttendance/list/StaffAttendanceListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function StaffAttendanceListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.staffAttendance.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.staffAttendance.list.title')}
        </PageTitle>

        <StaffAttendanceListToolbar />
        <StaffAttendanceListFilter />
        <StaffAttendanceListTable />
      </ContentWrapper>
    </>
  );
}

export default StaffAttendanceListPage;
