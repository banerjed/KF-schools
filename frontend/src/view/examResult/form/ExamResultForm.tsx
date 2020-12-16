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
import examResultEnumerators from 'src/modules/examResult/examResultEnumerators';
import StudentAutocompleteFormItem from 'src/view/student/autocomplete/StudentAutocompleteFormItem';
import ExaminationAutocompleteFormItem from 'src/view/examination/autocomplete/ExaminationAutocompleteFormItem';

const schema = yup.object().shape({
  student: yupFormSchemas.relationToOne(
    i18n('entities.examResult.fields.student'),
    {
      "required": true
    },
  ),
  exam: yupFormSchemas.relationToOne(
    i18n('entities.examResult.fields.exam'),
    {
      "required": true
    },
  ),
  score: yupFormSchemas.integer(
    i18n('entities.examResult.fields.score'),
    {
      "max": 100,
      "min": 0
    },
  ),
  grade: yupFormSchemas.enumerator(
    i18n('entities.examResult.fields.grade'),
    {
      "options": examResultEnumerators.grade
    },
  ),
  teacherNotes: yupFormSchemas.string(
    i18n('entities.examResult.fields.teacherNotes'),
    {
      "max": 1024
    },
  ),
});

function ExamResultForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      student: record.student,
      exam: record.exam,
      score: record.score,
      grade: record.grade,
      teacherNotes: record.teacherNotes,
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
                label={i18n('entities.examResult.fields.student')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ExaminationAutocompleteFormItem  
                name="exam"
                label={i18n('entities.examResult.fields.exam')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="score"
                label={i18n('entities.examResult.fields.score')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="grade"
                label={i18n('entities.examResult.fields.grade')}
                options={examResultEnumerators.grade.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.examResult.enumerators.grade.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="teacherNotes"
                label={i18n('entities.examResult.fields.teacherNotes')}  
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

export default ExamResultForm;
