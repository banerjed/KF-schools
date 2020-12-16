import React from 'react';
import { i18n } from 'src/i18n';
import CourseListFilter from 'src/view/course/list/CourseListFilter';
import CourseListTable from 'src/view/course/list/CourseListTable';
import CourseListToolbar from 'src/view/course/list/CourseListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CourseListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.course.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.course.list.title')}
        </PageTitle>

        <CourseListToolbar />
        <CourseListFilter />
        <CourseListTable />
      </ContentWrapper>
    </>
  );
}

export default CourseListPage;
