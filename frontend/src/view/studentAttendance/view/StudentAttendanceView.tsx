import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import StudentViewItem from 'src/view/student/view/StudentViewItem';

function StudentAttendanceView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <StudentViewItem
          label={i18n('entities.studentAttendance.fields.student')}
          value={record.student}
        />

        <TextViewItem
          label={i18n('entities.studentAttendance.fields.schoolDate')}
          value={record.schoolDate}
        />

        <TextViewItem
          label={i18n('entities.studentAttendance.fields.attended')}
          value={
            record.attended
              ? i18n('common.yes')
              : i18n('common.no')
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

export default StudentAttendanceView;
