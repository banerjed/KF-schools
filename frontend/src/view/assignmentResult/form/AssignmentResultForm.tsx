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
import assignmentResultEnumerators from 'src/modules/assignmentResult/assignmentResultEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import AssignmentAutocompleteFormItem from 'src/view/assignment/autocomplete/AssignmentAutocompleteFormItem';
import StudentAutocompleteFormItem from 'src/view/student/autocomplete/StudentAutocompleteFormItem';

const schema = yup.object().shape({
  assignment: yupFormSchemas.relationToOne(
    i18n('entities.assignmentResult.fields.assignment'),
    {
      "required": true
    },
  ),
  student: yupFormSchemas.relationToOne(
    i18n('entities.assignmentResult.fields.student'),
    {
      "required": true
    },
  ),
  submissionDate: yupFormSchemas.date(
    i18n('entities.assignmentResult.fields.submissionDate'),
    {},
  ),
  score: yupFormSchemas.integer(
    i18n('entities.assignmentResult.fields.score'),
    {
      "min": 0,
      "max": 100
    },
  ),
  grade: yupFormSchemas.enumerator(
    i18n('entities.assignmentResult.fields.grade'),
    {
      "options": assignmentResultEnumerators.grade
    },
  ),
  teacherNotes: yupFormSchemas.string(
    i18n('entities.assignmentResult.fields.teacherNotes'),
    {
      "max": 1024
    },
  ),
});

function AssignmentResultForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      assignment: record.assignment,
      student: record.student,
      submissionDate: record.submissionDate ? moment(record.submissionDate, 'YYYY-MM-DD') : null,
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
              <AssignmentAutocompleteFormItem  
                name="assignment"
                label={i18n('entities.assignmentResult.fields.assignment')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <StudentAutocompleteFormItem  
                name="student"
                label={i18n('entities.assignmentResult.fields.student')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="submissionDate"
                label={i18n('entities.assignmentResult.fields.submissionDate')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="score"
                label={i18n('entities.assignmentResult.fields.score')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="grade"
                label={i18n('entities.assignmentResult.fields.grade')}
                options={assignmentResultEnumerators.grade.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.assignmentResult.enumerators.grade.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="teacherNotes"
                label={i18n('entities.assignmentResult.fields.teacherNotes')}  
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

export default AssignmentResultForm;
