import React from 'react';
import { i18n } from 'src/i18n';
import AssignmentResultListFilter from 'src/view/assignmentResult/list/AssignmentResultListFilter';
import AssignmentResultListTable from 'src/view/assignmentResult/list/AssignmentResultListTable';
import AssignmentResultListToolbar from 'src/view/assignmentResult/list/AssignmentResultListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AssignmentResultListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.assignmentResult.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.assignmentResult.list.title')}
        </PageTitle>

        <AssignmentResultListToolbar />
        <AssignmentResultListFilter />
        <AssignmentResultListTable />
      </ContentWrapper>
    </>
  );
}

export default AssignmentResultListPage;
