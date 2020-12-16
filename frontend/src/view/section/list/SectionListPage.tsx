import React from 'react';
import { i18n } from 'src/i18n';
import SectionListFilter from 'src/view/section/list/SectionListFilter';
import SectionListTable from 'src/view/section/list/SectionListTable';
import SectionListToolbar from 'src/view/section/list/SectionListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SectionListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.section.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.section.list.title')}
        </PageTitle>

        <SectionListToolbar />
        <SectionListFilter />
        <SectionListTable />
      </ContentWrapper>
    </>
  );
}

export default SectionListPage;
