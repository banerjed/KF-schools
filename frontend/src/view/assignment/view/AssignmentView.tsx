import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CourseViewItem from 'src/view/course/view/CourseViewItem';
import AssignmentResultViewItem from 'src/view/assignmentResult/view/AssignmentResultViewItem';

function AssignmentView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <CourseViewItem
          label={i18n('entities.assignment.fields.course')}
          value={record.course}
        />

        <TextViewItem
          label={i18n('entities.assignment.fields.category')}
          value={
            record.category &&
            i18n(
              `entities.assignment.enumerators.category.${record.category}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.assignment.fields.dueDate')}
          value={record.dueDate}
        />

        <TextViewItem
          label={i18n('entities.assignment.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.assignment.fields.homeworkLink')}
          value={record.homeworkLink}
        />

        <TextViewItem
          label={i18n('entities.assignment.fields.maxScore')}
          value={record.maxScore}
        />

        <TextViewItem
          label={i18n('entities.assignment.fields.weight')}
          value={record.weight}
        />

        <AssignmentResultViewItem
          label={i18n('entities.assignment.fields.results')}
          value={record.results}
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

export default AssignmentView;
