import React from 'react';
import { i18n } from 'src/i18n';
import SchoolListFilter from 'src/view/school/list/SchoolListFilter';
import SchoolListTable from 'src/view/school/list/SchoolListTable';
import SchoolListToolbar from 'src/view/school/list/SchoolListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SchoolListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.school.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.school.list.title')}
        </PageTitle>

        <SchoolListToolbar />
        <SchoolListFilter />
        <SchoolListTable />
      </ContentWrapper>
    </>
  );
}

export default SchoolListPage;
