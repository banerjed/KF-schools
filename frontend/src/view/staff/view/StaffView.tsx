import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import SchoolViewItem from 'src/view/school/view/SchoolViewItem';
import SubjectViewItem from 'src/view/subject/view/SubjectViewItem';

function StaffView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <UserViewItem
          label={i18n('entities.staff.fields.user')}
          value={record.user}
        />

        <SchoolViewItem
          label={i18n('entities.staff.fields.school')}
          value={record.school}
        />

        <TextViewItem
          label={i18n('entities.staff.fields.prefix')}
          value={
            record.prefix &&
            i18n(
              `entities.staff.enumerators.prefix.${record.prefix}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.staff.fields.firstName')}
          value={record.firstName}
        />

        <TextViewItem
          label={i18n('entities.staff.fields.middleName')}
          value={record.middleName}
        />

        <TextViewItem
          label={i18n('entities.staff.fields.lastName')}
          value={record.lastName}
        />

        <TextViewItem
          label={i18n('entities.staff.fields.fullName')}
          value={record.fullName}
        />

        <TextViewItem
          label={i18n('entities.staff.fields.role')}
          value={
            record.role &&
            i18n(
              `entities.staff.enumerators.role.${record.role}`,
            )
          }
        />

        <SubjectViewItem
          label={i18n('entities.staff.fields.subject')}
          value={record.subject}
        />

        <TextViewItem
          label={i18n('entities.staff.fields.dateOfBirth')}
          value={record.dateOfBirth}
        />

        <TextViewItem
          label={i18n('entities.staff.fields.gender')}
          value={
            record.gender &&
            i18n(
              `entities.staff.enumerators.gender.${record.gender}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.staff.fields.maritalStatus')}
          value={
            record.maritalStatus &&
            i18n(
              `entities.staff.enumerators.maritalStatus.${record.maritalStatus}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.staff.fields.email')}
          value={record.email}
        />

        <TextViewItem
          label={i18n('entities.staff.fields.cellPhone')}
          value={record.cellPhone}
        />

        <TextViewItem
          label={i18n('entities.staff.fields.alternatePhone')}
          value={record.alternatePhone}
        />

        <TextViewItem
          label={i18n('entities.staff.fields.address')}
          value={record.address}
        />

        <TextViewItem
          label={i18n('entities.staff.fields.dateOfJoining')}
          value={record.dateOfJoining}
        />

        <TextViewItem
          label={i18n('entities.staff.fields.dateOfTermination')}
          value={record.dateOfTermination}
        />

        <TextViewItem
          label={i18n('entities.staff.fields.educationalQualifications')}
          value={
            record.educationalQualifications &&
            i18n(
              `entities.staff.enumerators.educationalQualifications.${record.educationalQualifications}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.staff.fields.priorExperience')}
          value={record.priorExperience}
        />

        <TextViewItem
          label={i18n('entities.staff.fields.monthlySalary')}
          value={record.monthlySalary}
        />

        <ImagesViewItem
          label={i18n('entities.staff.fields.picture')}
          value={record.picture}
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

export default StaffView;
