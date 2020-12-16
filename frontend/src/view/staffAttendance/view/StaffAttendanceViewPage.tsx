import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/staffAttendance/view/staffAttendanceViewActions';
import selectors from 'src/modules/staffAttendance/view/staffAttendanceViewSelectors';
import StaffAttendanceView from 'src/view/staffAttendance/view/StaffAttendanceView';
import StaffAttendanceViewToolbar from 'src/view/staffAttendance/view/StaffAttendanceViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function StaffAttendancePage() {
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
          [i18n('entities.staffAttendance.menu'), '/staff-attendance'],
          [i18n('entities.staffAttendance.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.staffAttendance.view.title')}
        </PageTitle>

        <StaffAttendanceViewToolbar match={match} />

        <StaffAttendanceView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default StaffAttendancePage;
