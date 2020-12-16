import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/reportCard/view/reportCardViewActions';
import selectors from 'src/modules/reportCard/view/reportCardViewSelectors';
import ReportCardView from 'src/view/reportCard/view/ReportCardView';
import ReportCardViewToolbar from 'src/view/reportCard/view/ReportCardViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ReportCardPage() {
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
          [i18n('entities.reportCard.menu'), '/report-card'],
          [i18n('entities.reportCard.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.reportCard.view.title')}
        </PageTitle>

        <ReportCardViewToolbar match={match} />

        <ReportCardView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ReportCardPage;
