import React from 'react';
import { i18n } from 'src/i18n';
import ExamResultListFilter from 'src/view/examResult/list/ExamResultListFilter';
import ExamResultListTable from 'src/view/examResult/list/ExamResultListTable';
import ExamResultListToolbar from 'src/view/examResult/list/ExamResultListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ExamResultListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.examResult.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.examResult.list.title')}
        </PageTitle>

        <ExamResultListToolbar />
        <ExamResultListFilter />
        <ExamResultListTable />
      </ContentWrapper>
    </>
  );
}

export default ExamResultListPage;
