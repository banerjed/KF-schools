import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/subject/importer/subjectImporterActions';
import fields from 'src/modules/subject/importer/subjectImporterFields';
import selectors from 'src/modules/subject/importer/subjectImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SubjectImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.subject.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.subject.menu'), '/subject'],
          [i18n('entities.subject.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.subject.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default SubjectImportPage;
