import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import SchoolViewItem from 'src/view/school/view/SchoolViewItem';
import HouseholdViewItem from 'src/view/household/view/HouseholdViewItem';
import EnrollmentViewItem from 'src/view/enrollment/view/EnrollmentViewItem';
import StudentPaymentViewItem from 'src/view/studentPayment/view/StudentPaymentViewItem';
import SectionViewItem from 'src/view/section/view/SectionViewItem';
import SponsorViewItem from 'src/view/sponsor/view/SponsorViewItem';

function StudentView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <ImagesViewItem
          label={i18n('entities.student.fields.picture')}
          value={record.picture}
        />

        <TextViewItem
          label={i18n('entities.student.fields.rollNumber')}
          value={record.rollNumber}
        />

        <TextViewItem
          label={i18n('entities.student.fields.firstName')}
          value={record.firstName}
        />

        <TextViewItem
          label={i18n('entities.student.fields.middleName')}
          value={record.middleName}
        />

        <TextViewItem
          label={i18n('entities.student.fields.lastName')}
          value={record.lastName}
        />

        <TextViewItem
          label={i18n('entities.student.fields.fullName')}
          value={record.fullName}
        />

        <SchoolViewItem
          label={i18n('entities.student.fields.school')}
          value={record.school}
        />

        <TextViewItem
          label={i18n('entities.student.fields.gender')}
          value={
            record.gender &&
            i18n(
              `entities.student.enumerators.gender.${record.gender}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.student.fields.dateOfBirth')}
          value={record.dateOfBirth}
        />

        <TextViewItem
          label={i18n('entities.student.fields.dateOfJoin')}
          value={record.dateOfJoin}
        />

        <HouseholdViewItem
          label={i18n('entities.student.fields.household')}
          value={record.household}
        />

        <EnrollmentViewItem
          label={i18n('entities.student.fields.enrollments')}
          value={record.enrollments}
        />

        <StudentPaymentViewItem
          label={i18n('entities.student.fields.payments')}
          value={record.payments}
        />

        <SectionViewItem
          label={i18n('entities.student.fields.currentSection')}
          value={record.currentSection}
        />

        <TextViewItem
          label={i18n('entities.student.fields.needsSponsorship')}
          value={
            record.needsSponsorship
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.student.fields.aboutStudent')}
          value={record.aboutStudent}
        />

        <SponsorViewItem
          label={i18n('entities.student.fields.currentSponsor')}
          value={record.currentSponsor}
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

export default StudentView;
