import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import AssignmentViewItem from 'src/view/assignment/view/AssignmentViewItem';
import StudentViewItem from 'src/view/student/view/StudentViewItem';

function AssignmentResultView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <AssignmentViewItem
          label={i18n('entities.assignmentResult.fields.assignment')}
          value={record.assignment}
        />

        <StudentViewItem
          label={i18n('entities.assignmentResult.fields.student')}
          value={record.student}
        />

        <TextViewItem
          label={i18n('entities.assignmentResult.fields.submissionDate')}
          value={record.submissionDate}
        />

        <TextViewItem
          label={i18n('entities.assignmentResult.fields.score')}
          value={record.score}
        />

        <TextViewItem
          label={i18n('entities.assignmentResult.fields.grade')}
          value={
            record.grade &&
            i18n(
              `entities.assignmentResult.enumerators.grade.${record.grade}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.assignmentResult.fields.teacherNotes')}
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

export default AssignmentResultView;
