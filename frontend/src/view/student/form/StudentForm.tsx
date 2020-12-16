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
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import studentEnumerators from 'src/modules/student/studentEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';
import HouseholdAutocompleteFormItem from 'src/view/household/autocomplete/HouseholdAutocompleteFormItem';
import EnrollmentAutocompleteFormItem from 'src/view/enrollment/autocomplete/EnrollmentAutocompleteFormItem';
import StudentPaymentAutocompleteFormItem from 'src/view/studentPayment/autocomplete/StudentPaymentAutocompleteFormItem';
import SectionAutocompleteFormItem from 'src/view/section/autocomplete/SectionAutocompleteFormItem';
import SponsorAutocompleteFormItem from 'src/view/sponsor/autocomplete/SponsorAutocompleteFormItem';

const schema = yup.object().shape({
  picture: yupFormSchemas.images(
    i18n('entities.student.fields.picture'),
    {},
  ),
  rollNumber: yupFormSchemas.string(
    i18n('entities.student.fields.rollNumber'),
    {
      "min": 3,
      "max": 50
    },
  ),
  firstName: yupFormSchemas.string(
    i18n('entities.student.fields.firstName'),
    {
      "required": true,
      "min": 2,
      "max": 50
    },
  ),
  middleName: yupFormSchemas.string(
    i18n('entities.student.fields.middleName'),
    {
      "min": 2,
      "max": 50
    },
  ),
  lastName: yupFormSchemas.string(
    i18n('entities.student.fields.lastName'),
    {
      "required": true,
      "min": 2,
      "max": 50
    },
  ),
  fullName: yupFormSchemas.string(
    i18n('entities.student.fields.fullName'),
    {},
  ),
  school: yupFormSchemas.relationToOne(
    i18n('entities.student.fields.school'),
    {
      "required": true
    },
  ),
  gender: yupFormSchemas.enumerator(
    i18n('entities.student.fields.gender'),
    {
      "required": true,
      "options": studentEnumerators.gender
    },
  ),
  dateOfBirth: yupFormSchemas.date(
    i18n('entities.student.fields.dateOfBirth'),
    {
      "required": true
    },
  ),
  dateOfJoin: yupFormSchemas.date(
    i18n('entities.student.fields.dateOfJoin'),
    {},
  ),
  household: yupFormSchemas.relationToOne(
    i18n('entities.student.fields.household'),
    {
      "required": true
    },
  ),
  enrollments: yupFormSchemas.relationToMany(
    i18n('entities.student.fields.enrollments'),
    {},
  ),
  payments: yupFormSchemas.relationToMany(
    i18n('entities.student.fields.payments'),
    {},
  ),
  currentSection: yupFormSchemas.relationToOne(
    i18n('entities.student.fields.currentSection'),
    {},
  ),
  needsSponsorship: yupFormSchemas.boolean(
    i18n('entities.student.fields.needsSponsorship'),
    {},
  ),
  aboutStudent: yupFormSchemas.string(
    i18n('entities.student.fields.aboutStudent'),
    {},
  ),
  currentSponsor: yupFormSchemas.relationToOne(
    i18n('entities.student.fields.currentSponsor'),
    {},
  ),
});

function StudentForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      picture: record.picture || [],
      rollNumber: record.rollNumber,
      firstName: record.firstName,
      middleName: record.middleName,
      lastName: record.lastName,
      fullName: record.fullName,
      school: record.school,
      gender: record.gender,
      dateOfBirth: record.dateOfBirth ? moment(record.dateOfBirth, 'YYYY-MM-DD') : null,
      dateOfJoin: record.dateOfJoin ? moment(record.dateOfJoin, 'YYYY-MM-DD') : null,
      household: record.household,
      enrollments: record.enrollments || [],
      payments: record.payments || [],
      currentSection: record.currentSection,
      needsSponsorship: record.needsSponsorship,
      aboutStudent: record.aboutStudent,
      currentSponsor: record.currentSponsor,
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
              <ImagesFormItem
                name="picture"
                label={i18n('entities.student.fields.picture')}
                required={false}
                storage={Storage.values.studentPicture}
                max={undefined}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="rollNumber"
                label={i18n('entities.student.fields.rollNumber')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="firstName"
                label={i18n('entities.student.fields.firstName')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="middleName"
                label={i18n('entities.student.fields.middleName')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="lastName"
                label={i18n('entities.student.fields.lastName')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="fullName"
                label={i18n('entities.student.fields.fullName')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SchoolAutocompleteFormItem  
                name="school"
                label={i18n('entities.student.fields.school')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <RadioFormItem
                name="gender"
                label={i18n('entities.student.fields.gender')}
                options={studentEnumerators.gender.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.student.enumerators.gender.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="dateOfBirth"
                label={i18n('entities.student.fields.dateOfBirth')}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="dateOfJoin"
                label={i18n('entities.student.fields.dateOfJoin')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <HouseholdAutocompleteFormItem  
                name="household"
                label={i18n('entities.student.fields.household')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <EnrollmentAutocompleteFormItem  
                name="enrollments"
                label={i18n('entities.student.fields.enrollments')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <StudentPaymentAutocompleteFormItem  
                name="payments"
                label={i18n('entities.student.fields.payments')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SectionAutocompleteFormItem  
                name="currentSection"
                label={i18n('entities.student.fields.currentSection')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="needsSponsorship"
                label={i18n('entities.student.fields.needsSponsorship')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="aboutStudent"
                label={i18n('entities.student.fields.aboutStudent')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SponsorAutocompleteFormItem  
                name="currentSponsor"
                label={i18n('entities.student.fields.currentSponsor')}
                required={false}
                showCreate={!props.modal}
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

export default StudentForm;
