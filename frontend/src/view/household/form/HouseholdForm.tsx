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
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import householdEnumerators from 'src/modules/household/householdEnumerators';
import StudentAutocompleteFormItem from 'src/view/student/autocomplete/StudentAutocompleteFormItem';
import StudentPaymentAutocompleteFormItem from 'src/view/studentPayment/autocomplete/StudentPaymentAutocompleteFormItem';

const schema = yup.object().shape({
  familyLastName: yupFormSchemas.string(
    i18n('entities.household.fields.familyLastName'),
    {
      "required": true,
      "min": 3,
      "max": 100
    },
  ),
  address: yupFormSchemas.string(
    i18n('entities.household.fields.address'),
    {
      "max": 255,
      "min": 10
    },
  ),
  zipcode: yupFormSchemas.string(
    i18n('entities.household.fields.zipcode'),
    {
      "max": 10,
      "min": 5
    },
  ),
  primaryGuardianRole: yupFormSchemas.enumerator(
    i18n('entities.household.fields.primaryGuardianRole'),
    {
      "required": true,
      "options": householdEnumerators.primaryGuardianRole
    },
  ),
  primaryGuardianFullName: yupFormSchemas.string(
    i18n('entities.household.fields.primaryGuardianFullName'),
    {
      "max": 100,
      "min": 5,
      "required": true
    },
  ),
  primaryGuardianCellPhone: yupFormSchemas.string(
    i18n('entities.household.fields.primaryGuardianCellPhone'),
    {
      "max": 20,
      "min": 10
    },
  ),
  primaryGuardianEmail: yupFormSchemas.string(
    i18n('entities.household.fields.primaryGuardianEmail'),
    {
      "min": 10,
      "max": 100
    },
  ),
  primaryGuardianProfession: yupFormSchemas.string(
    i18n('entities.household.fields.primaryGuardianProfession'),
    {},
  ),
  backupGuardianRole: yupFormSchemas.enumerator(
    i18n('entities.household.fields.backupGuardianRole'),
    {
      "options": householdEnumerators.backupGuardianRole
    },
  ),
  backupGuardianFullName: yupFormSchemas.string(
    i18n('entities.household.fields.backupGuardianFullName'),
    {
      "min": 5,
      "max": 100
    },
  ),
  backupGuardianCellPhone: yupFormSchemas.string(
    i18n('entities.household.fields.backupGuardianCellPhone'),
    {
      "min": 10,
      "max": 20
    },
  ),
  backupGuardianEmail: yupFormSchemas.string(
    i18n('entities.household.fields.backupGuardianEmail'),
    {
      "min": 10,
      "max": 100
    },
  ),
  backupGuardianProfession: yupFormSchemas.string(
    i18n('entities.household.fields.backupGuardianProfession'),
    {},
  ),
  students: yupFormSchemas.relationToMany(
    i18n('entities.household.fields.students'),
    {},
  ),
  payments: yupFormSchemas.relationToMany(
    i18n('entities.household.fields.payments'),
    {},
  ),
});

function HouseholdForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      familyLastName: record.familyLastName,
      address: record.address,
      zipcode: record.zipcode,
      primaryGuardianRole: record.primaryGuardianRole,
      primaryGuardianFullName: record.primaryGuardianFullName,
      primaryGuardianCellPhone: record.primaryGuardianCellPhone,
      primaryGuardianEmail: record.primaryGuardianEmail,
      primaryGuardianProfession: record.primaryGuardianProfession,
      backupGuardianRole: record.backupGuardianRole,
      backupGuardianFullName: record.backupGuardianFullName,
      backupGuardianCellPhone: record.backupGuardianCellPhone,
      backupGuardianEmail: record.backupGuardianEmail,
      backupGuardianProfession: record.backupGuardianProfession,
      students: record.students || [],
      payments: record.payments || [],
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
                name="familyLastName"
                label={i18n('entities.household.fields.familyLastName')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="address"
                label={i18n('entities.household.fields.address')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="zipcode"
                label={i18n('entities.household.fields.zipcode')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="primaryGuardianRole"
                label={i18n('entities.household.fields.primaryGuardianRole')}
                options={householdEnumerators.primaryGuardianRole.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.household.enumerators.primaryGuardianRole.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="primaryGuardianFullName"
                label={i18n('entities.household.fields.primaryGuardianFullName')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="primaryGuardianCellPhone"
                label={i18n('entities.household.fields.primaryGuardianCellPhone')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="primaryGuardianEmail"
                label={i18n('entities.household.fields.primaryGuardianEmail')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="primaryGuardianProfession"
                label={i18n('entities.household.fields.primaryGuardianProfession')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="backupGuardianRole"
                label={i18n('entities.household.fields.backupGuardianRole')}
                options={householdEnumerators.backupGuardianRole.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.household.enumerators.backupGuardianRole.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="backupGuardianFullName"
                label={i18n('entities.household.fields.backupGuardianFullName')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="backupGuardianCellPhone"
                label={i18n('entities.household.fields.backupGuardianCellPhone')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="backupGuardianEmail"
                label={i18n('entities.household.fields.backupGuardianEmail')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="backupGuardianProfession"
                label={i18n('entities.household.fields.backupGuardianProfession')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <StudentAutocompleteFormItem  
                name="students"
                label={i18n('entities.household.fields.students')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <StudentPaymentAutocompleteFormItem  
                name="payments"
                label={i18n('entities.household.fields.payments')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
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

export default HouseholdForm;
