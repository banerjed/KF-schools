import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/examResult/view/examResultViewActions';
import selectors from 'src/modules/examResult/view/examResultViewSelectors';
import ExamResultView from 'src/view/examResult/view/ExamResultView';
import ExamResultViewToolbar from 'src/view/examResult/view/ExamResultViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ExamResultPage() {
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
          [i18n('entities.examResult.menu'), '/exam-result'],
          [i18n('entities.examResult.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.examResult.view.title')}
        </PageTitle>

        <ExamResultViewToolbar match={match} />

        <ExamResultView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ExamResultPage;
