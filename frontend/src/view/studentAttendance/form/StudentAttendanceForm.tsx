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
import StudentAutocompleteFormItem from 'src/view/student/autocomplete/StudentAutocompleteFormItem';

const schema = yup.object().shape({
  student: yupFormSchemas.relationToOne(
    i18n('entities.studentAttendance.fields.student'),
    {
      "required": true
    },
  ),
  schoolDate: yupFormSchemas.date(
    i18n('entities.studentAttendance.fields.schoolDate'),
    {
      "required": true
    },
  ),
  attended: yupFormSchemas.boolean(
    i18n('entities.studentAttendance.fields.attended'),
    {},
  ),
});

function StudentAttendanceForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      student: record.student,
      schoolDate: record.schoolDate ? moment(record.schoolDate, 'YYYY-MM-DD') : null,
      attended: record.attended,
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
              <StudentAutocompleteFormItem  
                name="student"
                label={i18n('entities.studentAttendance.fields.student')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="schoolDate"
                label={i18n('entities.studentAttendance.fields.schoolDate')}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="attended"
                label={i18n('entities.studentAttendance.fields.attended')}
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

export default StudentAttendanceForm;
