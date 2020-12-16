import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/staff/view/staffViewActions';
import selectors from 'src/modules/staff/view/staffViewSelectors';
import StaffView from 'src/view/staff/view/StaffView';
import StaffViewToolbar from 'src/view/staff/view/StaffViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function StaffPage() {
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
          [i18n('entities.staff.menu'), '/staff'],
          [i18n('entities.staff.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.staff.view.title')}
        </PageTitle>

        <StaffViewToolbar match={match} />

        <StaffView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default StaffPage;
