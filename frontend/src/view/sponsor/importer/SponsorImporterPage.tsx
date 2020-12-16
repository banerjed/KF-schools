import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/sponsor/importer/sponsorImporterActions';
import fields from 'src/modules/sponsor/importer/sponsorImporterFields';
import selectors from 'src/modules/sponsor/importer/sponsorImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SponsorImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.sponsor.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.sponsor.menu'), '/sponsor'],
          [i18n('entities.sponsor.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.sponsor.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default SponsorImportPage;
