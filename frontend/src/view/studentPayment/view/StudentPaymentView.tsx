import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import HouseholdViewItem from 'src/view/household/view/HouseholdViewItem';
import StudentViewItem from 'src/view/student/view/StudentViewItem';

function StudentPaymentView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <HouseholdViewItem
          label={i18n('entities.studentPayment.fields.household')}
          value={record.household}
        />

        <StudentViewItem
          label={i18n('entities.studentPayment.fields.student')}
          value={record.student}
        />

        <TextViewItem
          label={i18n('entities.studentPayment.fields.paymentDate')}
          value={record.paymentDate}
        />

        {record.paymentAmount != null && <TextViewItem
          label={i18n('entities.studentPayment.fields.paymentAmount')}
          value={record.paymentAmount.toFixed(2)}
        />}

        <TextViewItem
          label={i18n('entities.studentPayment.fields.paymentType')}
          value={
            record.paymentType &&
            i18n(
              `entities.studentPayment.enumerators.paymentType.${record.paymentType}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.studentPayment.fields.feeMonths')}
          value={record.feeMonths}
        />

        <TextViewItem
          label={i18n('entities.studentPayment.fields.paymentNotes')}
          value={record.paymentNotes}
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

export default StudentPaymentView;
