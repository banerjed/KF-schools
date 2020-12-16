import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import StudentViewItem from 'src/view/student/view/StudentViewItem';

function SponsorView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.sponsor.fields.firstName')}
          value={record.firstName}
        />

        <TextViewItem
          label={i18n('entities.sponsor.fields.lastName')}
          value={record.lastName}
        />

        <TextViewItem
          label={i18n('entities.sponsor.fields.fullName')}
          value={record.fullName}
        />

        <StudentViewItem
          label={i18n('entities.sponsor.fields.students')}
          value={record.students}
        />

        <TextViewItem
          label={i18n('entities.sponsor.fields.startDate')}
          value={record.startDate}
        />

        <TextViewItem
          label={i18n('entities.sponsor.fields.endDate')}
          value={record.endDate}
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

export default SponsorView;
