import React from 'react';
import { i18n } from 'src/i18n';
import ReportCardListFilter from 'src/view/reportCard/list/ReportCardListFilter';
import ReportCardListTable from 'src/view/reportCard/list/ReportCardListTable';
import ReportCardListToolbar from 'src/view/reportCard/list/ReportCardListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ReportCardListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.reportCard.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.reportCard.list.title')}
        </PageTitle>

        <ReportCardListToolbar />
        <ReportCardListFilter />
        <ReportCardListTable />
      </ContentWrapper>
    </>
  );
}

export default ReportCardListPage;
