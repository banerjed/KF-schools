import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import SchoolViewItem from 'src/view/school/view/SchoolViewItem';
import SectionViewItem from 'src/view/section/view/SectionViewItem';
import SubjectViewItem from 'src/view/subject/view/SubjectViewItem';
import StaffViewItem from 'src/view/staff/view/StaffViewItem';
import AssignmentViewItem from 'src/view/assignment/view/AssignmentViewItem';
import ExaminationViewItem from 'src/view/examination/view/ExaminationViewItem';

function CourseView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <SchoolViewItem
          label={i18n('entities.course.fields.school')}
          value={record.school}
        />

        <SectionViewItem
          label={i18n('entities.course.fields.section')}
          value={record.section}
        />

        <SubjectViewItem
          label={i18n('entities.course.fields.subject')}
          value={record.subject}
        />

        <StaffViewItem
          label={i18n('entities.course.fields.teacher')}
          value={record.teacher}
        />

        <TextViewItem
          label={i18n('entities.course.fields.schoolYear')}
          value={
            record.schoolYear &&
            i18n(
              `entities.course.enumerators.schoolYear.${record.schoolYear}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.course.fields.courseName')}
          value={record.courseName}
        />

        <AssignmentViewItem
          label={i18n('entities.course.fields.assignments')}
          value={record.assignments}
        />

        <ExaminationViewItem
          label={i18n('entities.course.fields.examinations')}
          value={record.examinations}
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

export default CourseView;
