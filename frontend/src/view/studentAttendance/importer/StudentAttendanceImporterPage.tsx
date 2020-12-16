import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/studentAttendance/importer/studentAttendanceImporterActions';
import fields from 'src/modules/studentAttendance/importer/studentAttendanceImporterFields';
import selectors from 'src/modules/studentAttendance/importer/studentAttendanceImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function StudentAttendanceImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.studentAttendance.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.studentAttendance.menu'), '/student-attendance'],
          [i18n('entities.studentAttendance.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.studentAttendance.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default StudentAttendanceImportPage;
