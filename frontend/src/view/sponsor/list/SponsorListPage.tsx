import React from 'react';
import { i18n } from 'src/i18n';
import SponsorListFilter from 'src/view/sponsor/list/SponsorListFilter';
import SponsorListTable from 'src/view/sponsor/list/SponsorListTable';
import SponsorListToolbar from 'src/view/sponsor/list/SponsorListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SponsorListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.sponsor.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.sponsor.list.title')}
        </PageTitle>

        <SponsorListToolbar />
        <SponsorListFilter />
        <SponsorListTable />
      </ContentWrapper>
    </>
  );
}

export default SponsorListPage;
