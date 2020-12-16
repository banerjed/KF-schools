import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/assignmentResult/view/assignmentResultViewActions';
import selectors from 'src/modules/assignmentResult/view/assignmentResultViewSelectors';
import AssignmentResultView from 'src/view/assignmentResult/view/AssignmentResultView';
import AssignmentResultViewToolbar from 'src/view/assignmentResult/view/AssignmentResultViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AssignmentResultPage() {
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
          [i18n('entities.assignmentResult.menu'), '/assignment-result'],
          [i18n('entities.assignmentResult.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.assignmentResult.view.title')}
        </PageTitle>

        <AssignmentResultViewToolbar match={match} />

        <AssignmentResultView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default AssignmentResultPage;
