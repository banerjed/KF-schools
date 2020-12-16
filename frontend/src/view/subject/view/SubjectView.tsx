import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import StaffViewItem from 'src/view/staff/view/StaffViewItem';

function SubjectView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.subject.fields.name')}
          value={record.name}
        />

        <StaffViewItem
          label={i18n('entities.subject.fields.teachers')}
          value={record.teachers}
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

export default SubjectView;
