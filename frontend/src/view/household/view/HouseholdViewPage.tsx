import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/household/view/householdViewActions';
import selectors from 'src/modules/household/view/householdViewSelectors';
import HouseholdView from 'src/view/household/view/HouseholdView';
import HouseholdViewToolbar from 'src/view/household/view/HouseholdViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function HouseholdPage() {
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
          [i18n('entities.household.menu'), '/household'],
          [i18n('entities.household.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.household.view.title')}
        </PageTitle>

        <HouseholdViewToolbar match={match} />

        <HouseholdView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default HouseholdPage;
