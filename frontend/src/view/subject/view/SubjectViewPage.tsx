import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/subject/view/subjectViewActions';
import selectors from 'src/modules/subject/view/subjectViewSelectors';
import SubjectView from 'src/view/subject/view/SubjectView';
import SubjectViewToolbar from 'src/view/subject/view/SubjectViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SubjectPage() {
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
          [i18n('entities.subject.menu'), '/subject'],
          [i18n('entities.subject.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.subject.view.title')}
        </PageTitle>

        <SubjectViewToolbar match={match} />

        <SubjectView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default SubjectPage;
