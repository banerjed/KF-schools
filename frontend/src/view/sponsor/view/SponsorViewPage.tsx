import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/sponsor/view/sponsorViewActions';
import selectors from 'src/modules/sponsor/view/sponsorViewSelectors';
import SponsorView from 'src/view/sponsor/view/SponsorView';
import SponsorViewToolbar from 'src/view/sponsor/view/SponsorViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SponsorPage() {
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
          [i18n('entities.sponsor.menu'), '/sponsor'],
          [i18n('entities.sponsor.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.sponsor.view.title')}
        </PageTitle>

        <SponsorViewToolbar match={match} />

        <SponsorView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default SponsorPage;
