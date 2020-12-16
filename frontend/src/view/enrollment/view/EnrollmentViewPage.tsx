import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/enrollment/view/enrollmentViewActions';
import selectors from 'src/modules/enrollment/view/enrollmentViewSelectors';
import EnrollmentView from 'src/view/enrollment/view/EnrollmentView';
import EnrollmentViewToolbar from 'src/view/enrollment/view/EnrollmentViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function EnrollmentPage() {
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
          [i18n('entities.enrollment.menu'), '/enrollment'],
          [i18n('entities.enrollment.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.enrollment.view.title')}
        </PageTitle>

        <EnrollmentViewToolbar match={match} />

        <EnrollmentView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default EnrollmentPage;
