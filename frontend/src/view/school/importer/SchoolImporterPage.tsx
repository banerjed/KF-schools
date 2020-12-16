import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/school/importer/schoolImporterActions';
import fields from 'src/modules/school/importer/schoolImporterFields';
import selectors from 'src/modules/school/importer/schoolImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SchoolImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.school.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.school.menu'), '/school'],
          [i18n('entities.school.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.school.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default SchoolImportPage;
