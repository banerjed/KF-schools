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
import courseEnumerators from 'src/modules/course/courseEnumerators';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';
import SectionAutocompleteFormItem from 'src/view/section/autocomplete/SectionAutocompleteFormItem';
import SubjectAutocompleteFormItem from 'src/view/subject/autocomplete/SubjectAutocompleteFormItem';
import StaffAutocompleteFormItem from 'src/view/staff/autocomplete/StaffAutocompleteFormItem';
import AssignmentAutocompleteFormItem from 'src/view/assignment/autocomplete/AssignmentAutocompleteFormItem';
import ExaminationAutocompleteFormItem from 'src/view/examination/autocomplete/ExaminationAutocompleteFormItem';

const schema = yup.object().shape({
  school: yupFormSchemas.relationToOne(
    i18n('entities.course.fields.school'),
    {
      "required": true
    },
  ),
  section: yupFormSchemas.relationToOne(
    i18n('entities.course.fields.section'),
    {
      "required": true
    },
  ),
  subject: yupFormSchemas.relationToOne(
    i18n('entities.course.fields.subject'),
    {
      "required": true
    },
  ),
  teacher: yupFormSchemas.relationToOne(
    i18n('entities.course.fields.teacher'),
    {
      "required": true
    },
  ),
  schoolYear: yupFormSchemas.enumerator(
    i18n('entities.course.fields.schoolYear'),
    {
      "required": true,
      "options": courseEnumerators.schoolYear
    },
  ),
  courseName: yupFormSchemas.string(
    i18n('entities.course.fields.courseName'),
    {
      "min": 5,
      "max": 100,
      "required": true
    },
  ),
  assignments: yupFormSchemas.relationToMany(
    i18n('entities.course.fields.assignments'),
    {},
  ),
  examinations: yupFormSchemas.relationToMany(
    i18n('entities.course.fields.examinations'),
    {},
  ),
});

function CourseForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      school: record.school,
      section: record.section,
      subject: record.subject,
      teacher: record.teacher,
      schoolYear: record.schoolYear,
      courseName: record.courseName,
      assignments: record.assignments || [],
      examinations: record.examinations || [],
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
                label={i18n('entities.course.fields.school')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SectionAutocompleteFormItem  
                name="section"
                label={i18n('entities.course.fields.section')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SubjectAutocompleteFormItem  
                name="subject"
                label={i18n('entities.course.fields.subject')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <StaffAutocompleteFormItem  
                name="teacher"
                label={i18n('entities.course.fields.teacher')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="schoolYear"
                label={i18n('entities.course.fields.schoolYear')}
                options={courseEnumerators.schoolYear.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.course.enumerators.schoolYear.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="courseName"
                label={i18n('entities.course.fields.courseName')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <AssignmentAutocompleteFormItem  
                name="assignments"
                label={i18n('entities.course.fields.assignments')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ExaminationAutocompleteFormItem  
                name="examinations"
                label={i18n('entities.course.fields.examinations')}
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

export default CourseForm;
