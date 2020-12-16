import React from 'react';
import { i18n } from 'src/i18n';
import SubjectListFilter from 'src/view/subject/list/SubjectListFilter';
import SubjectListTable from 'src/view/subject/list/SubjectListTable';
import SubjectListToolbar from 'src/view/subject/list/SubjectListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SubjectListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.subject.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.subject.list.title')}
        </PageTitle>

        <SubjectListToolbar />
        <SubjectListFilter />
        <SubjectListTable />
      </ContentWrapper>
    </>
  );
}

export default SubjectListPage;
