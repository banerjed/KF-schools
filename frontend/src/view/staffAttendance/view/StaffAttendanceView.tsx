import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import moment from 'moment';
import StaffViewItem from 'src/view/staff/view/StaffViewItem';

function StaffAttendanceView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <StaffViewItem
          label={i18n('entities.staffAttendance.fields.staff')}
          value={record.staff}
        />

        <TextViewItem
          label={i18n('entities.staffAttendance.fields.schoolDate')}
          value={record.schoolDate}
        />

        <TextViewItem
          label={i18n('entities.staffAttendance.fields.hasWorked')}
          value={
            record.hasWorked
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n(
            'entities.staffAttendance.fields.startTime',
          )}
          value={moment(record.startTime).format(
            'YYYY-MM-DD HH:mm',
          )}
        />

        <TextViewItem
          label={i18n(
            'entities.staffAttendance.fields.endTime',
          )}
          value={moment(record.endTime).format(
            'YYYY-MM-DD HH:mm',
          )}
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

export default StaffAttendanceView;
