import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import StudentViewItem from 'src/view/student/view/StudentViewItem';
import ExaminationViewItem from 'src/view/examination/view/ExaminationViewItem';

function ExamResultView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <StudentViewItem
          label={i18n('entities.examResult.fields.student')}
          value={record.student}
        />

        <ExaminationViewItem
          label={i18n('entities.examResult.fields.exam')}
          value={record.exam}
        />

        <TextViewItem
          label={i18n('entities.examResult.fields.score')}
          value={record.score}
        />

        <TextViewItem
          label={i18n('entities.examResult.fields.grade')}
          value={
            record.grade &&
            i18n(
              `entities.examResult.enumerators.grade.${record.grade}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.examResult.fields.teacherNotes')}
          value={record.teacherNotes}
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

export default ExamResultView;
