import { Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.school.fields.name'),
    {
      "required": true,
      "min": 5,
      "max": 128
    },
  ),
  address: yupFormSchemas.string(
    i18n('entities.school.fields.address'),
    {
      "required": true,
      "min": 10,
      "max": 255
    },
  ),
  contactPhone: yupFormSchemas.string(
    i18n('entities.school.fields.contactPhone'),
    {
      "required": true,
      "min": 10,
      "max": 20
    },
  ),
  contactEmail: yupFormSchemas.string(
    i18n('entities.school.fields.contactEmail'),
    {
      "min": 10,
      "max": 100
    },
  ),
  contactFax: yupFormSchemas.string(
    i18n('entities.school.fields.contactFax'),
    {
      "max": 20,
      "min": 10
    },
  ),
  principalsName: yupFormSchemas.string(
    i18n('entities.school.fields.principalsName'),
    {
      "min": 5,
      "max": 100
    },
  ),
  principalsEmail: yupFormSchemas.string(
    i18n('entities.school.fields.principalsEmail'),
    {
      "min": 10,
      "max": 100
    },
  ),
  principalsPhone: yupFormSchemas.string(
    i18n('entities.school.fields.principalsPhone'),
    {
      "min": 10,
      "max": 20
    },
  ),
  vicePrincipalsName: yupFormSchemas.string(
    i18n('entities.school.fields.vicePrincipalsName'),
    {
      "min": 5,
      "max": 100
    },
  ),
  vicePrincipalsEmail: yupFormSchemas.string(
    i18n('entities.school.fields.vicePrincipalsEmail'),
    {
      "min": 10,
      "max": 100
    },
  ),
  vicePrincipalsPhone: yupFormSchemas.string(
    i18n('entities.school.fields.vicePrincipalsPhone'),
    {
      "min": 10,
      "max": 20
    },
  ),
});

function SchoolForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      address: record.address,
      contactPhone: record.contactPhone,
      contactEmail: record.contactEmail,
      contactFax: record.contactFax,
      principalsName: record.principalsName,
      principalsEmail: record.principalsEmail,
      principalsPhone: record.principalsPhone,
      vicePrincipalsName: record.vicePrincipalsName,
      vicePrincipalsEmail: record.vicePrincipalsEmail,
      vicePrincipalsPhone: record.vicePrincipalsPhone,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading, modal } = props;

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="name"
                label={i18n('entities.school.fields.name')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="address"
                label={i18n('entities.school.fields.address')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="contactPhone"
                label={i18n('entities.school.fields.contactPhone')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="contactEmail"
                label={i18n('entities.school.fields.contactEmail')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="contactFax"
                label={i18n('entities.school.fields.contactFax')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="principalsName"
                label={i18n('entities.school.fields.principalsName')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="principalsEmail"
                label={i18n('entities.school.fields.principalsEmail')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="principalsPhone"
                label={i18n('entities.school.fields.principalsPhone')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="vicePrincipalsName"
                label={i18n('entities.school.fields.vicePrincipalsName')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="vicePrincipalsEmail"
                label={i18n('entities.school.fields.vicePrincipalsEmail')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="vicePrincipalsPhone"
                label={i18n('entities.school.fields.vicePrincipalsPhone')}  
                required={false}
              />
            </Grid>
          </Grid>
          <FormButtons
            style={{
              flexDirection: modal
                ? 'row-reverse'
                : undefined,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
              startIcon={<SaveIcon />}
              size="small"
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              type="button"
              startIcon={<UndoIcon />}
              size="small"
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel ? (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                type="button"
                startIcon={<CloseIcon />}
                size="small"
              >
                {i18n('common.cancel')}
              </Button>
            ) : null}
          </FormButtons>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default SchoolForm;
