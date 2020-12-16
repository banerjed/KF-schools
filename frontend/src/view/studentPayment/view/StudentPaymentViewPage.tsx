import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/studentPayment/view/studentPaymentViewActions';
import selectors from 'src/modules/studentPayment/view/studentPaymentViewSelectors';
import StudentPaymentView from 'src/view/studentPayment/view/StudentPaymentView';
import StudentPaymentViewToolbar from 'src/view/studentPayment/view/StudentPaymentViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function StudentPaymentPage() {
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
          [i18n('entities.studentPayment.menu'), '/student-payment'],
          [i18n('entities.studentPayment.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.studentPayment.view.title')}
        </PageTitle>

        <StudentPaymentViewToolbar match={match} />

        <StudentPaymentView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default StudentPaymentPage;
