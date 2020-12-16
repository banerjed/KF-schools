import React from 'react';
import { i18n } from 'src/i18n';
import StudentAttendanceListFilter from 'src/view/studentAttendance/list/StudentAttendanceListFilter';
import StudentAttendanceListTable from 'src/view/studentAttendance/list/StudentAttendanceListTable';
import StudentAttendanceListToolbar from 'src/view/studentAttendance/list/StudentAttendanceListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function StudentAttendanceListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.studentAttendance.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.studentAttendance.list.title')}
        </PageTitle>

        <StudentAttendanceListToolbar />
        <StudentAttendanceListFilter />
        <StudentAttendanceListTable />
      </ContentWrapper>
    </>
  );
}

export default StudentAttendanceListPage;
