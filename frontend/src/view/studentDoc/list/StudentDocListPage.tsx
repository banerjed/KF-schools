import React from 'react';
import { i18n } from 'src/i18n';
import StudentDocListFilter from 'src/view/studentDoc/list/StudentDocListFilter';
import StudentDocListTable from 'src/view/studentDoc/list/StudentDocListTable';
import StudentDocListToolbar from 'src/view/studentDoc/list/StudentDocListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function StudentDocListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.studentDoc.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.studentDoc.list.title')}
        </PageTitle>

        <StudentDocListToolbar />
        <StudentDocListFilter />
        <StudentDocListTable />
      </ContentWrapper>
    </>
  );
}

export default StudentDocListPage;
