import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/household/importer/householdImporterActions';
import fields from 'src/modules/household/importer/householdImporterFields';
import selectors from 'src/modules/household/importer/householdImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function HouseholdImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.household.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.household.menu'), '/household'],
          [i18n('entities.household.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.household.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default HouseholdImportPage;
