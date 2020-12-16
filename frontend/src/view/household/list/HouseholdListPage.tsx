import React from 'react';
import { i18n } from 'src/i18n';
import HouseholdListFilter from 'src/view/household/list/HouseholdListFilter';
import HouseholdListTable from 'src/view/household/list/HouseholdListTable';
import HouseholdListToolbar from 'src/view/household/list/HouseholdListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function HouseholdListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.household.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.household.list.title')}
        </PageTitle>

        <HouseholdListToolbar />
        <HouseholdListFilter />
        <HouseholdListTable />
      </ContentWrapper>
    </>
  );
}

export default HouseholdListPage;
