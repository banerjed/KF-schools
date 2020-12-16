import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/section/view/sectionViewActions';
import selectors from 'src/modules/section/view/sectionViewSelectors';
import SectionView from 'src/view/section/view/SectionView';
import SectionViewToolbar from 'src/view/section/view/SectionViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SectionPage() {
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
          [i18n('entities.section.menu'), '/section'],
          [i18n('entities.section.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.section.view.title')}
        </PageTitle>

        <SectionViewToolbar match={match} />

        <SectionView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default SectionPage;
