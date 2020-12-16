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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import examinationEnumerators from 'src/modules/examination/examinationEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import CourseAutocompleteFormItem from 'src/view/course/autocomplete/CourseAutocompleteFormItem';
import ExamResultAutocompleteFormItem from 'src/view/examResult/autocomplete/ExamResultAutocompleteFormItem';

const schema = yup.object().shape({
  course: yupFormSchemas.relationToOne(
    i18n('entities.examination.fields.course'),
    {
      "required": true
    },
  ),
  category: yupFormSchemas.enumerator(
    i18n('entities.examination.fields.category'),
    {
      "options": examinationEnumerators.category
    },
  ),
  examDate: yupFormSchemas.date(
    i18n('entities.examination.fields.examDate'),
    {
      "required": true
    },
  ),
  weight: yupFormSchemas.integer(
    i18n('entities.examination.fields.weight'),
    {
      "min": 0,
      "max": 100
    },
  ),
  maxScore: yupFormSchemas.integer(
    i18n('entities.examination.fields.maxScore'),
    {},
  ),
  name: yupFormSchemas.string(
    i18n('entities.examination.fields.name'),
    {
      "required": true,
      "max": 255
    },
  ),
  results: yupFormSchemas.relationToMany(
    i18n('entities.examination.fields.results'),
    {},
  ),
});

function ExaminationForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      course: record.course,
      category: record.category,
      examDate: record.examDate ? moment(record.examDate, 'YYYY-MM-DD') : null,
      weight: record.weight,
      maxScore: record.maxScore,
      name: record.name,
      results: record.results || [],
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
              <CourseAutocompleteFormItem  
                name="course"
                label={i18n('entities.examination.fields.course')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="category"
                label={i18n('entities.examination.fields.category')}
                options={examinationEnumerators.category.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.examination.enumerators.category.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="examDate"
                label={i18n('entities.examination.fields.examDate')}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="weight"
                label={i18n('entities.examination.fields.weight')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="maxScore"
                label={i18n('entities.examination.fields.maxScore')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="name"
                label={i18n('entities.examination.fields.name')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ExamResultAutocompleteFormItem  
                name="results"
                label={i18n('entities.examination.fields.results')}
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

export default ExaminationForm;
