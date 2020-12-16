import React from 'react';
import { i18n } from 'src/i18n';
import ExaminationListFilter from 'src/view/examination/list/ExaminationListFilter';
import ExaminationListTable from 'src/view/examination/list/ExaminationListTable';
import ExaminationListToolbar from 'src/view/examination/list/ExaminationListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ExaminationListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.examination.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.examination.list.title')}
        </PageTitle>

        <ExaminationListToolbar />
        <ExaminationListFilter />
        <ExaminationListTable />
      </ContentWrapper>
    </>
  );
}

export default ExaminationListPage;
