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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import reportCardEnumerators from 'src/modules/reportCard/reportCardEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import StudentAutocompleteFormItem from 'src/view/student/autocomplete/StudentAutocompleteFormItem';

const schema = yup.object().shape({
  student: yupFormSchemas.relationToOne(
    i18n('entities.reportCard.fields.student'),
    {
      "required": true
    },
  ),
  reportDate: yupFormSchemas.date(
    i18n('entities.reportCard.fields.reportDate'),
    {
      "required": true
    },
  ),
  category: yupFormSchemas.enumerator(
    i18n('entities.reportCard.fields.category'),
    {
      "options": reportCardEnumerators.category
    },
  ),
  reportCardAttachment: yupFormSchemas.files(
    i18n('entities.reportCard.fields.reportCardAttachment'),
    {
      "required": true
    },
  ),
});

function ReportCardForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      student: record.student,
      reportDate: record.reportDate ? moment(record.reportDate, 'YYYY-MM-DD') : null,
      category: record.category,
      reportCardAttachment: record.reportCardAttachment || [],
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
                label={i18n('entities.reportCard.fields.student')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="reportDate"
                label={i18n('entities.reportCard.fields.reportDate')}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="category"
                label={i18n('entities.reportCard.fields.category')}
                options={reportCardEnumerators.category.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.reportCard.enumerators.category.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <FilesFormItem
                name="reportCardAttachment"
                label={i18n('entities.reportCard.fields.reportCardAttachment')}
                required={true}
                storage={Storage.values.reportCardReportCardAttachment}
                max={undefined}
                formats={undefined}
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

export default ReportCardForm;
