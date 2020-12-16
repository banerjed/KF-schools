import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/staffAttendance/importer/staffAttendanceImporterActions';
import fields from 'src/modules/staffAttendance/importer/staffAttendanceImporterFields';
import selectors from 'src/modules/staffAttendance/importer/staffAttendanceImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function StaffAttendanceImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.staffAttendance.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.staffAttendance.menu'), '/staff-attendance'],
          [i18n('entities.staffAttendance.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.staffAttendance.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default StaffAttendanceImportPage;
