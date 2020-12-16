import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import SchoolViewItem from 'src/view/school/view/SchoolViewItem';
import EnrollmentViewItem from 'src/view/enrollment/view/EnrollmentViewItem';

function SectionView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <SchoolViewItem
          label={i18n('entities.section.fields.school')}
          value={record.school}
        />

        <TextViewItem
          label={i18n('entities.section.fields.grade')}
          value={
            record.grade &&
            i18n(
              `entities.section.enumerators.grade.${record.grade}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.section.fields.sectionName')}
          value={record.sectionName}
        />

        <EnrollmentViewItem
          label={i18n('entities.section.fields.enrollments')}
          value={record.enrollments}
        />        
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default SectionView;
