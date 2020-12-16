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
import sectionEnumerators from 'src/modules/section/sectionEnumerators';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';
import EnrollmentAutocompleteFormItem from 'src/view/enrollment/autocomplete/EnrollmentAutocompleteFormItem';

const schema = yup.object().shape({
  school: yupFormSchemas.relationToOne(
    i18n('entities.section.fields.school'),
    {
      "required": true
    },
  ),
  grade: yupFormSchemas.enumerator(
    i18n('entities.section.fields.grade'),
    {
      "required": true,
      "options": sectionEnumerators.grade
    },
  ),
  sectionName: yupFormSchemas.string(
    i18n('entities.section.fields.sectionName'),
    {
      "required": true,
      "min": 2,
      "max": 50
    },
  ),
  enrollments: yupFormSchemas.relationToMany(
    i18n('entities.section.fields.enrollments'),
    {},
  ),
});

function SectionForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      school: record.school,
      grade: record.grade,
      sectionName: record.sectionName,
      enrollments: record.enrollments || [],
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
              <SchoolAutocompleteFormItem  
                name="school"
                label={i18n('entities.section.fields.school')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="grade"
                label={i18n('entities.section.fields.grade')}
                options={sectionEnumerators.grade.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.section.enumerators.grade.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="sectionName"
                label={i18n('entities.section.fields.sectionName')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <EnrollmentAutocompleteFormItem  
                name="enrollments"
                label={i18n('entities.section.fields.enrollments')}
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

export default SectionForm;
