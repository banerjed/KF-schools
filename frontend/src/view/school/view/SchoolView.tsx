import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function SchoolView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.school.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.school.fields.address')}
          value={record.address}
        />

        <TextViewItem
          label={i18n('entities.school.fields.contactPhone')}
          value={record.contactPhone}
        />

        <TextViewItem
          label={i18n('entities.school.fields.contactEmail')}
          value={record.contactEmail}
        />

        <TextViewItem
          label={i18n('entities.school.fields.contactFax')}
          value={record.contactFax}
        />

        <TextViewItem
          label={i18n('entities.school.fields.principalsName')}
          value={record.principalsName}
        />

        <TextViewItem
          label={i18n('entities.school.fields.principalsEmail')}
          value={record.principalsEmail}
        />

        <TextViewItem
          label={i18n('entities.school.fields.principalsPhone')}
          value={record.principalsPhone}
        />

        <TextViewItem
          label={i18n('entities.school.fields.vicePrincipalsName')}
          value={record.vicePrincipalsName}
        />

        <TextViewItem
          label={i18n('entities.school.fields.vicePrincipalsEmail')}
          value={record.vicePrincipalsEmail}
        />

        <TextViewItem
          label={i18n('entities.school.fields.vicePrincipalsPhone')}
          value={record.vicePrincipalsPhone}
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

export default SchoolView;
