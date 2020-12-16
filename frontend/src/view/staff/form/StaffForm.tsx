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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import staffEnumerators from 'src/modules/staff/staffEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';
import SubjectAutocompleteFormItem from 'src/view/subject/autocomplete/SubjectAutocompleteFormItem';

const schema = yup.object().shape({
  user: yupFormSchemas.relationToOne(
    i18n('entities.staff.fields.user'),
    {},
  ),
  school: yupFormSchemas.relationToOne(
    i18n('entities.staff.fields.school'),
    {
      "required": true
    },
  ),
  prefix: yupFormSchemas.enumerator(
    i18n('entities.staff.fields.prefix'),
    {
      "options": staffEnumerators.prefix
    },
  ),
  firstName: yupFormSchemas.string(
    i18n('entities.staff.fields.firstName'),
    {
      "required": true,
      "min": 3,
      "max": 100
    },
  ),
  middleName: yupFormSchemas.string(
    i18n('entities.staff.fields.middleName'),
    {
      "max": 100
    },
  ),
  lastName: yupFormSchemas.string(
    i18n('entities.staff.fields.lastName'),
    {
      "required": true,
      "min": 3,
      "max": 100
    },
  ),
  fullName: yupFormSchemas.string(
    i18n('entities.staff.fields.fullName'),
    {},
  ),
  role: yupFormSchemas.enumerator(
    i18n('entities.staff.fields.role'),
    {
      "options": staffEnumerators.role
    },
  ),
  subject: yupFormSchemas.relationToOne(
    i18n('entities.staff.fields.subject'),
    {},
  ),
  dateOfBirth: yupFormSchemas.date(
    i18n('entities.staff.fields.dateOfBirth'),
    {},
  ),
  gender: yupFormSchemas.enumerator(
    i18n('entities.staff.fields.gender'),
    {
      "required": true,
      "options": staffEnumerators.gender
    },
  ),
  maritalStatus: yupFormSchemas.enumerator(
    i18n('entities.staff.fields.maritalStatus'),
    {
      "options": staffEnumerators.maritalStatus
    },
  ),
  email: yupFormSchemas.string(
    i18n('entities.staff.fields.email'),
    {
      "min": 10,
      "max": 100
    },
  ),
  cellPhone: yupFormSchemas.string(
    i18n('entities.staff.fields.cellPhone'),
    {
      "min": 10,
      "max": 20
    },
  ),
  alternatePhone: yupFormSchemas.string(
    i18n('entities.staff.fields.alternatePhone'),
    {
      "min": 10,
      "max": 20
    },
  ),
  address: yupFormSchemas.string(
    i18n('entities.staff.fields.address'),
    {
      "max": 255
    },
  ),
  dateOfJoining: yupFormSchemas.date(
    i18n('entities.staff.fields.dateOfJoining'),
    {},
  ),
  dateOfTermination: yupFormSchemas.date(
    i18n('entities.staff.fields.dateOfTermination'),
    {},
  ),
  educationalQualifications: yupFormSchemas.enumerator(
    i18n('entities.staff.fields.educationalQualifications'),
    {
      "options": staffEnumerators.educationalQualifications
    },
  ),
  priorExperience: yupFormSchemas.string(
    i18n('entities.staff.fields.priorExperience'),
    {
      "max": 1024
    },
  ),
  monthlySalary: yupFormSchemas.decimal(
    i18n('entities.staff.fields.monthlySalary'),
    {},
  ),
  picture: yupFormSchemas.images(
    i18n('entities.staff.fields.picture'),
    {},
  ),
});

function StaffForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      user: record.user,
      school: record.school,
      prefix: record.prefix,
      firstName: record.firstName,
      middleName: record.middleName,
      lastName: record.lastName,
      fullName: record.fullName,
      role: record.role,
      subject: record.subject,
      dateOfBirth: record.dateOfBirth ? moment(record.dateOfBirth, 'YYYY-MM-DD') : null,
      gender: record.gender,
      maritalStatus: record.maritalStatus,
      email: record.email,
      cellPhone: record.cellPhone,
      alternatePhone: record.alternatePhone,
      address: record.address,
      dateOfJoining: record.dateOfJoining ? moment(record.dateOfJoining, 'YYYY-MM-DD') : null,
      dateOfTermination: record.dateOfTermination ? moment(record.dateOfTermination, 'YYYY-MM-DD') : null,
      educationalQualifications: record.educationalQualifications,
      priorExperience: record.priorExperience,
      monthlySalary: record.monthlySalary,
      picture: record.picture || [],
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
              <UserAutocompleteFormItem  
                name="user"
                label={i18n('entities.staff.fields.user')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SchoolAutocompleteFormItem  
                name="school"
                label={i18n('entities.staff.fields.school')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="prefix"
                label={i18n('entities.staff.fields.prefix')}
                options={staffEnumerators.prefix.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.staff.enumerators.prefix.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="firstName"
                label={i18n('entities.staff.fields.firstName')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="middleName"
                label={i18n('entities.staff.fields.middleName')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="lastName"
                label={i18n('entities.staff.fields.lastName')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="fullName"
                label={i18n('entities.staff.fields.fullName')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="role"
                label={i18n('entities.staff.fields.role')}
                options={staffEnumerators.role.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.staff.enumerators.role.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SubjectAutocompleteFormItem  
                name="subject"
                label={i18n('entities.staff.fields.subject')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="dateOfBirth"
                label={i18n('entities.staff.fields.dateOfBirth')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="gender"
                label={i18n('entities.staff.fields.gender')}
                options={staffEnumerators.gender.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.staff.enumerators.gender.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="maritalStatus"
                label={i18n('entities.staff.fields.maritalStatus')}
                options={staffEnumerators.maritalStatus.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.staff.enumerators.maritalStatus.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="email"
                label={i18n('entities.staff.fields.email')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="cellPhone"
                label={i18n('entities.staff.fields.cellPhone')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="alternatePhone"
                label={i18n('entities.staff.fields.alternatePhone')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="address"
                label={i18n('entities.staff.fields.address')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="dateOfJoining"
                label={i18n('entities.staff.fields.dateOfJoining')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="dateOfTermination"
                label={i18n('entities.staff.fields.dateOfTermination')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="educationalQualifications"
                label={i18n('entities.staff.fields.educationalQualifications')}
                options={staffEnumerators.educationalQualifications.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.staff.enumerators.educationalQualifications.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="priorExperience"
                label={i18n('entities.staff.fields.priorExperience')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="monthlySalary"
                label={i18n('entities.staff.fields.monthlySalary')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ImagesFormItem
                name="picture"
                label={i18n('entities.staff.fields.picture')}
                required={false}
                storage={Storage.values.staffPicture}
                max={undefined}
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

export default StaffForm;
