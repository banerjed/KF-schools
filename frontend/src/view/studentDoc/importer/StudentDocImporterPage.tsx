import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/studentDoc/importer/studentDocImporterActions';
import fields from 'src/modules/studentDoc/importer/studentDocImporterFields';
import selectors from 'src/modules/studentDoc/importer/studentDocImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function StudentDocImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.studentDoc.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.studentDoc.menu'), '/student-doc'],
          [i18n('entities.studentDoc.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.studentDoc.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default StudentDocImportPage;
