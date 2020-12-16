import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/examResult/importer/examResultImporterActions';
import fields from 'src/modules/examResult/importer/examResultImporterFields';
import selectors from 'src/modules/examResult/importer/examResultImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ExamResultImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.examResult.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.examResult.menu'), '/exam-result'],
          [i18n('entities.examResult.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.examResult.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ExamResultImportPage;
