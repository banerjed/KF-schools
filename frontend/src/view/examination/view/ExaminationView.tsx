import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CourseViewItem from 'src/view/course/view/CourseViewItem';
import ExamResultViewItem from 'src/view/examResult/view/ExamResultViewItem';

function ExaminationView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <CourseViewItem
          label={i18n('entities.examination.fields.course')}
          value={record.course}
        />

        <TextViewItem
          label={i18n('entities.examination.fields.category')}
          value={
            record.category &&
            i18n(
              `entities.examination.enumerators.category.${record.category}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.examination.fields.examDate')}
          value={record.examDate}
        />

        <TextViewItem
          label={i18n('entities.examination.fields.weight')}
          value={record.weight}
        />

        <TextViewItem
          label={i18n('entities.examination.fields.maxScore')}
          value={record.maxScore}
        />

        <TextViewItem
          label={i18n('entities.examination.fields.name')}
          value={record.name}
        />

        <ExamResultViewItem
          label={i18n('entities.examination.fields.results')}
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

export default ExaminationView;
