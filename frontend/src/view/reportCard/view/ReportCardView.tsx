import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import StudentViewItem from 'src/view/student/view/StudentViewItem';

function ReportCardView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <StudentViewItem
          label={i18n('entities.reportCard.fields.student')}
          value={record.student}
        />

        <TextViewItem
          label={i18n('entities.reportCard.fields.reportDate')}
          value={record.reportDate}
        />

        <TextViewItem
          label={i18n('entities.reportCard.fields.category')}
          value={
            record.category &&
            i18n(
              `entities.reportCard.enumerators.category.${record.category}`,
            )
          }
        />

        <FilesViewItem
          label={i18n(
            'entities.reportCard.fields.reportCardAttachment',
          )}
          value={record.reportCardAttachment}
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

export default ReportCardView;
