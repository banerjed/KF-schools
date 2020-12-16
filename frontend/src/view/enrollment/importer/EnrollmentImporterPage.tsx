import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/enrollment/importer/enrollmentImporterActions';
import fields from 'src/modules/enrollment/importer/enrollmentImporterFields';
import selectors from 'src/modules/enrollment/importer/enrollmentImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function EnrollmentImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.enrollment.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.enrollment.menu'), '/enrollment'],
          [i18n('entities.enrollment.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.enrollment.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default EnrollmentImportPage;
