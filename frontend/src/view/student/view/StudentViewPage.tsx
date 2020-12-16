import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/student/view/studentViewActions';
import selectors from 'src/modules/student/view/studentViewSelectors';
import StudentView from 'src/view/student/view/StudentView';
import StudentViewToolbar from 'src/view/student/view/StudentViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function StudentPage() {
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
          [i18n('entities.student.menu'), '/student'],
          [i18n('entities.student.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.student.view.title')}
        </PageTitle>

        <StudentViewToolbar match={match} />

        <StudentView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default StudentPage;
