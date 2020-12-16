import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/examination/view/examinationViewActions';
import selectors from 'src/modules/examination/view/examinationViewSelectors';
import ExaminationView from 'src/view/examination/view/ExaminationView';
import ExaminationViewToolbar from 'src/view/examination/view/ExaminationViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ExaminationPage() {
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
          [i18n('entities.examination.menu'), '/examination'],
          [i18n('entities.examination.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.examination.view.title')}
        </PageTitle>

        <ExaminationViewToolbar match={match} />

        <ExaminationView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ExaminationPage;
