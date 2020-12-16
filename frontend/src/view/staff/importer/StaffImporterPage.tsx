import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/staff/importer/staffImporterActions';
import fields from 'src/modules/staff/importer/staffImporterFields';
import selectors from 'src/modules/staff/importer/staffImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function StaffImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.staff.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.staff.menu'), '/staff'],
          [i18n('entities.staff.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.staff.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default StaffImportPage;
