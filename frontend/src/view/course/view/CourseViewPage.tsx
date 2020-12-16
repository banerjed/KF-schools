import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/course/view/courseViewActions';
import selectors from 'src/modules/course/view/courseViewSelectors';
import CourseView from 'src/view/course/view/CourseView';
import CourseViewToolbar from 'src/view/course/view/CourseViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CoursePage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.course.menu'), '/course'],
          [i18n('entities.course.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.course.view.title')}
        </PageTitle>

        <CourseViewToolbar match={match} />

        <CourseView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CoursePage;
