import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/assignmentResult/importer/assignmentResultImporterActions';
import fields from 'src/modules/assignmentResult/importer/assignmentResultImporterFields';
import selectors from 'src/modules/assignmentResult/importer/assignmentResultImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AssignmentResultImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.assignmentResult.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.assignmentResult.menu'), '/assignment-result'],
          [i18n('entities.assignmentResult.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.assignmentResult.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default AssignmentResultImportPage;
