import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import StudentViewItem from 'src/view/student/view/StudentViewItem';
import SectionViewItem from 'src/view/section/view/SectionViewItem';

function EnrollmentView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <StudentViewItem
          label={i18n('entities.enrollment.fields.student')}
          value={record.student}
        />

        <SectionViewItem
          label={i18n('entities.enrollment.fields.section')}
          value={record.section}
        />

        <TextViewItem
          label={i18n('entities.enrollment.fields.academicYear')}
          value={
            record.academicYear &&
            i18n(
              `entities.enrollment.enumerators.academicYear.${record.academicYear}`,
            )
          }
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

export default EnrollmentView;
