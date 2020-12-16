import React from 'react';
import { i18n } from 'src/i18n';
import StudentListFilter from 'src/view/student/list/StudentListFilter';
import StudentListTable from 'src/view/student/list/StudentListTable';
import StudentListToolbar from 'src/view/student/list/StudentListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function StudentListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.student.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.student.list.title')}
        </PageTitle>

        <StudentListToolbar />
        <StudentListFilter />
        <StudentListTable />
      </ContentWrapper>
    </>
  );
}

export default StudentListPage;
