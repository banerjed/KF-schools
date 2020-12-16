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
import actions from 'src/modules/course/list/courseListActions';
import selectors from 'src/modules/course/list/courseListSelectors';
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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import courseEnumerators from 'src/modules/course/courseEnumerators';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';
import SectionAutocompleteFormItem from 'src/view/section/autocomplete/SectionAutocompleteFormItem';
import SubjectAutocompleteFormItem from 'src/view/subject/autocomplete/SubjectAutocompleteFormItem';
import StaffAutocompleteFormItem from 'src/view/staff/autocomplete/StaffAutocompleteFormItem';

const schema = yup.object().shape({
  school: yupFilterSchemas.relationToOne(
    i18n('entities.course.fields.school'),
  ),
  section: yupFilterSchemas.relationToOne(
    i18n('entities.course.fields.section'),
  ),
  subject: yupFilterSchemas.relationToOne(
    i18n('entities.course.fields.subject'),
  ),
  teacher: yupFilterSchemas.relationToOne(
    i18n('entities.course.fields.teacher'),
  ),
  schoolYear: yupFilterSchemas.enumerator(
    i18n('entities.course.fields.schoolYear'),
  ),
});

const emptyValues = {
  school: null,
  section: null,
  subject: null,
  teacher: null,
  schoolYear: null,
}

const previewRenders = {
  school: {
      label: i18n('entities.course.fields.school'),
      render: filterRenders.relationToOne(),
    },
  section: {
      label: i18n('entities.course.fields.section'),
      render: filterRenders.relationToOne(),
    },
  subject: {
      label: i18n('entities.course.fields.subject'),
      render: filterRenders.relationToOne(),
    },
  teacher: {
      label: i18n('entities.course.fields.teacher'),
      render: filterRenders.relationToOne(),
    },
  schoolYear: {
    label: i18n('entities.course.fields.schoolYear'),
    render: filterRenders.enumerator('entities.course.enumerators.schoolYear',),
  },
}

function CourseListFilter(props) {
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
                  <SchoolAutocompleteFormItem  
                    name="school"
                    label={i18n('entities.course.fields.school')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SectionAutocompleteFormItem  
                    name="section"
                    label={i18n('entities.course.fields.section')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SubjectAutocompleteFormItem  
                    name="subject"
                    label={i18n('entities.course.fields.subject')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <StaffAutocompleteFormItem  
                    name="teacher"
                    label={i18n('entities.course.fields.teacher')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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

export default CourseListFilter;