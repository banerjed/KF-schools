import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/examination/importer/examinationImporterActions';
import fields from 'src/modules/examination/importer/examinationImporterFields';
import selectors from 'src/modules/examination/importer/examinationImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ExaminationImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.examination.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.examination.menu'), '/examination'],
          [i18n('entities.examination.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.examination.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ExaminationImportPage;
