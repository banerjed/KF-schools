import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import StudentViewItem from 'src/view/student/view/StudentViewItem';
import StudentPaymentViewItem from 'src/view/studentPayment/view/StudentPaymentViewItem';

function HouseholdView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.household.fields.familyLastName')}
          value={record.familyLastName}
        />

        <TextViewItem
          label={i18n('entities.household.fields.address')}
          value={record.address}
        />

        <TextViewItem
          label={i18n('entities.household.fields.zipcode')}
          value={record.zipcode}
        />

        <TextViewItem
          label={i18n('entities.household.fields.primaryGuardianRole')}
          value={
            record.primaryGuardianRole &&
            i18n(
              `entities.household.enumerators.primaryGuardianRole.${record.primaryGuardianRole}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.household.fields.primaryGuardianFullName')}
          value={record.primaryGuardianFullName}
        />

        <TextViewItem
          label={i18n('entities.household.fields.primaryGuardianCellPhone')}
          value={record.primaryGuardianCellPhone}
        />

        <TextViewItem
          label={i18n('entities.household.fields.primaryGuardianEmail')}
          value={record.primaryGuardianEmail}
        />

        <TextViewItem
          label={i18n('entities.household.fields.primaryGuardianProfession')}
          value={record.primaryGuardianProfession}
        />

        <TextViewItem
          label={i18n('entities.household.fields.backupGuardianRole')}
          value={
            record.backupGuardianRole &&
            i18n(
              `entities.household.enumerators.backupGuardianRole.${record.backupGuardianRole}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.household.fields.backupGuardianFullName')}
          value={record.backupGuardianFullName}
        />

        <TextViewItem
          label={i18n('entities.household.fields.backupGuardianCellPhone')}
          value={record.backupGuardianCellPhone}
        />

        <TextViewItem
          label={i18n('entities.household.fields.backupGuardianEmail')}
          value={record.backupGuardianEmail}
        />

        <TextViewItem
          label={i18n('entities.household.fields.backupGuardianProfession')}
          value={record.backupGuardianProfession}
        />

        <StudentViewItem
          label={i18n('entities.household.fields.students')}
          value={record.students}
        />

        <StudentPaymentViewItem
          label={i18n('entities.household.fields.payments')}
          value={record.payments}
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

export default HouseholdView;
