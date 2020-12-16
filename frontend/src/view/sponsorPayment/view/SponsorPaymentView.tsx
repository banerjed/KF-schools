import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import SponsorViewItem from 'src/view/sponsor/view/SponsorViewItem';
import StudentViewItem from 'src/view/student/view/StudentViewItem';

function SponsorPaymentView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <SponsorViewItem
          label={i18n('entities.sponsorPayment.fields.sponsor')}
          value={record.sponsor}
        />

        <StudentViewItem
          label={i18n('entities.sponsorPayment.fields.student')}
          value={record.student}
        />

        <TextViewItem
          label={i18n('entities.sponsorPayment.fields.paymentDate')}
          value={record.paymentDate}
        />

        {record.paymentAmount != null && <TextViewItem
          label={i18n('entities.sponsorPayment.fields.paymentAmount')}
          value={record.paymentAmount.toFixed(2)}
        />}

        <TextViewItem
          label={i18n('entities.sponsorPayment.fields.paymentType')}
          value={
            record.paymentType &&
            i18n(
              `entities.sponsorPayment.enumerators.paymentType.${record.paymentType}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.sponsorPayment.fields.feeMonths')}
          value={record.feeMonths}
        />

        <TextViewItem
          label={i18n('entities.sponsorPayment.fields.paymentNotes')}
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

export default SponsorPaymentView;
