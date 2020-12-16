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
import enrollmentEnumerators from 'src/modules/enrollment/enrollmentEnumerators';
import StudentAutocompleteFormItem from 'src/view/student/autocomplete/StudentAutocompleteFormItem';
import SectionAutocompleteFormItem from 'src/view/section/autocomplete/SectionAutocompleteFormItem';

const schema = yup.object().shape({
  student: yupFormSchemas.relationToOne(
    i18n('entities.enrollment.fields.student'),
    {},
  ),
  section: yupFormSchemas.relationToOne(
    i18n('entities.enrollment.fields.section'),
    {},
  ),
  academicYear: yupFormSchemas.enumerator(
    i18n('entities.enrollment.fields.academicYear'),
    {
      "options": enrollmentEnumerators.academicYear
    },
  ),
});

function EnrollmentForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      student: record.student,
      section: record.section,
      academicYear: record.academicYear,
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
                label={i18n('entities.enrollment.fields.student')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SectionAutocompleteFormItem  
                name="section"
                label={i18n('entities.enrollment.fields.section')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="academicYear"
                label={i18n('entities.enrollment.fields.academicYear')}
                options={enrollmentEnumerators.academicYear.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.enrollment.enumerators.academicYear.${value}`,
                    ),
                  }),
                )}
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

export default EnrollmentForm;
