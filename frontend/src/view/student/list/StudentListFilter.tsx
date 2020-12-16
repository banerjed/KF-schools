import {
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/student/list/studentListActions';
import selectors from 'src/modules/student/list/studentListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import FilterAccordion from 'src/view/shared/filter/FilterAccordion';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';
import SectionAutocompleteFormItem from 'src/view/section/autocomplete/SectionAutocompleteFormItem';

const schema = yup.object().shape({
  rollNumber: yupFilterSchemas.string(
    i18n('entities.student.fields.rollNumber'),
  ),
  firstName: yupFilterSchemas.string(
    i18n('entities.student.fields.firstName'),
  ),
  lastName: yupFilterSchemas.string(
    i18n('entities.student.fields.lastName'),
  ),
  school: yupFilterSchemas.relationToOne(
    i18n('entities.student.fields.school'),
  ),
  currentSection: yupFilterSchemas.relationToOne(
    i18n('entities.student.fields.currentSection'),
  ),
});

const emptyValues = {
  rollNumber: null,
  firstName: null,
  lastName: null,
  school: null,
  currentSection: null,
}

const previewRenders = {
  rollNumber: {
    label: i18n('entities.student.fields.rollNumber'),
    render: filterRenders.generic(),
  },
  firstName: {
    label: i18n('entities.student.fields.firstName'),
    render: filterRenders.generic(),
  },
  lastName: {
    label: i18n('entities.student.fields.lastName'),
    render: filterRenders.generic(),
  },
  school: {
      label: i18n('entities.student.fields.school'),
      render: filterRenders.relationToOne(),
    },
  currentSection: {
      label: i18n('entities.student.fields.currentSection'),
      render: filterRenders.relationToOne(),
    },
}

function StudentListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  return (
    <FilterWrapper>
      <FilterAccordion
        expanded={expanded}
        onChange={(event, isExpanded) =>
          setExpanded(isExpanded)
        }
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FilterPreview
            values={rawFilter}
            renders={previewRenders}
            expanded={expanded}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="rollNumber"
                    label={i18n('entities.student.fields.rollNumber')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="firstName"
                    label={i18n('entities.student.fields.firstName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="lastName"
                    label={i18n('entities.student.fields.lastName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SchoolAutocompleteFormItem  
                    name="school"
                    label={i18n('entities.student.fields.school')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SectionAutocompleteFormItem  
                    name="currentSection"
                    label={i18n('entities.student.fields.currentSection')}        
                  />
                </Grid>
              </Grid>

              <FilterButtons>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={props.loading}
                  startIcon={<SearchIcon />}
                  size="small"
                >
                  {i18n('common.search')}
                </Button>

                <Button
                  type="button"
                  onClick={onReset}
                  disabled={props.loading}
                  startIcon={<UndoIcon />}
                  size="small"
                >
                  {i18n('common.reset')}
                </Button>
              </FilterButtons>
            </form>
          </FormProvider>
        </AccordionDetails>
      </FilterAccordion>
    </FilterWrapper>
  );
}

export default StudentListFilter;