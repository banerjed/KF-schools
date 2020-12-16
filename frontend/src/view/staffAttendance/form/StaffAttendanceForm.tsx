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
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import StaffAutocompleteFormItem from 'src/view/staff/autocomplete/StaffAutocompleteFormItem';

const schema = yup.object().shape({
  staff: yupFormSchemas.relationToOne(
    i18n('entities.staffAttendance.fields.staff'),
    {
      "required": true
    },
  ),
  schoolDate: yupFormSchemas.date(
    i18n('entities.staffAttendance.fields.schoolDate'),
    {
      "required": true
    },
  ),
  hasWorked: yupFormSchemas.boolean(
    i18n('entities.staffAttendance.fields.hasWorked'),
    {},
  ),
  startTime: yupFormSchemas.datetime(
    i18n('entities.staffAttendance.fields.startTime'),
    {},
  ),
  endTime: yupFormSchemas.datetime(
    i18n('entities.staffAttendance.fields.endTime'),
    {},
  ),
});

function StaffAttendanceForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      staff: record.staff,
      schoolDate: record.schoolDate ? moment(record.schoolDate, 'YYYY-MM-DD') : null,
      hasWorked: record.hasWorked,
      startTime: record.startTime ? moment(record.startTime, 'YYYY-MM-DD HH:mm') : null,
      endTime: record.endTime ? moment(record.endTime, 'YYYY-MM-DD HH:mm') : null,
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
              <StaffAutocompleteFormItem  
                name="staff"
                label={i18n('entities.staffAttendance.fields.staff')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="schoolDate"
                label={i18n('entities.staffAttendance.fields.schoolDate')}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="hasWorked"
                label={i18n('entities.staffAttendance.fields.hasWorked')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="startTime"
                label={i18n('entities.staffAttendance.fields.startTime')}
                required={false}
                showTime
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="endTime"
                label={i18n('entities.staffAttendance.fields.endTime')}
                required={false}
                showTime
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

export default StaffAttendanceForm;
