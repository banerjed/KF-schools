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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import sponsorPaymentEnumerators from 'src/modules/sponsorPayment/sponsorPaymentEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import SponsorAutocompleteFormItem from 'src/view/sponsor/autocomplete/SponsorAutocompleteFormItem';
import StudentAutocompleteFormItem from 'src/view/student/autocomplete/StudentAutocompleteFormItem';

const schema = yup.object().shape({
  sponsor: yupFormSchemas.relationToOne(
    i18n('entities.sponsorPayment.fields.sponsor'),
    {
      "required": true
    },
  ),
  student: yupFormSchemas.relationToOne(
    i18n('entities.sponsorPayment.fields.student'),
    {
      "required": true
    },
  ),
  paymentDate: yupFormSchemas.date(
    i18n('entities.sponsorPayment.fields.paymentDate'),
    {
      "required": true
    },
  ),
  paymentAmount: yupFormSchemas.decimal(
    i18n('entities.sponsorPayment.fields.paymentAmount'),
    {
      "required": true,
      "scale": 2
    },
  ),
  paymentType: yupFormSchemas.enumerator(
    i18n('entities.sponsorPayment.fields.paymentType'),
    {
      "options": sponsorPaymentEnumerators.paymentType
    },
  ),
  feeMonths: yupFormSchemas.string(
    i18n('entities.sponsorPayment.fields.feeMonths'),
    {
      "required": true,
      "max": 255
    },
  ),
  paymentNotes: yupFormSchemas.string(
    i18n('entities.sponsorPayment.fields.paymentNotes'),
    {},
  ),
});

function SponsorPaymentForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      sponsor: record.sponsor,
      student: record.student,
      paymentDate: record.paymentDate ? moment(record.paymentDate, 'YYYY-MM-DD') : null,
      paymentAmount: record.paymentAmount,
      paymentType: record.paymentType,
      feeMonths: record.feeMonths,
      paymentNotes: record.paymentNotes,
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
              <SponsorAutocompleteFormItem  
                name="sponsor"
                label={i18n('entities.sponsorPayment.fields.sponsor')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <StudentAutocompleteFormItem  
                name="student"
                label={i18n('entities.sponsorPayment.fields.student')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="paymentDate"
                label={i18n('entities.sponsorPayment.fields.paymentDate')}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="paymentAmount"
                label={i18n('entities.sponsorPayment.fields.paymentAmount')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="paymentType"
                label={i18n('entities.sponsorPayment.fields.paymentType')}
                options={sponsorPaymentEnumerators.paymentType.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.sponsorPayment.enumerators.paymentType.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="feeMonths"
                label={i18n('entities.sponsorPayment.fields.feeMonths')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="paymentNotes"
                label={i18n('entities.sponsorPayment.fields.paymentNotes')}  
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

export default SponsorPaymentForm;
