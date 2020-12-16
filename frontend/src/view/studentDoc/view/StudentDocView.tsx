import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import StudentViewItem from 'src/view/student/view/StudentViewItem';

function StudentDocView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <StudentViewItem
          label={i18n('entities.studentDoc.fields.student')}
          value={record.student}
        />

        <FilesViewItem
          label={i18n(
            'entities.studentDoc.fields.docAttachment',
          )}
          value={record.docAttachment}
        />

        <TextViewItem
          label={i18n('entities.studentDoc.fields.docName')}
          value={record.docName}
        />

        <TextViewItem
          label={i18n('entities.studentDoc.fields.comment')}
          value={record.comment}
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

export default StudentDocView;
