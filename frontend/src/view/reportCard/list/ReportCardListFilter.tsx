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
import actions from 'src/modules/reportCard/list/reportCardListActions';
import selectors from 'src/modules/reportCard/list/reportCardListSelectors';
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
import reportCardEnumerators from 'src/modules/reportCard/reportCardEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import StudentAutocompleteFormItem from 'src/view/student/autocomplete/StudentAutocompleteFormItem';

const schema = yup.object().shape({
  student: yupFilterSchemas.relationToOne(
    i18n('entities.reportCard.fields.student'),
  ),
  reportDateRange: yupFilterSchemas.dateRange(
    i18n('entities.reportCard.fields.reportDateRange'),
  ),
  category: yupFilterSchemas.enumerator(
    i18n('entities.reportCard.fields.category'),
  ),
});

const emptyValues = {
  student: null,
  reportDateRange: [],
  category: null,
}

const previewRenders = {
  student: {
      label: i18n('entities.reportCard.fields.student'),
      render: filterRenders.relationToOne(),
    },
  reportDateRange: {
    label: i18n('entities.reportCard.fields.reportDateRange'),
    render: filterRenders.dateRange(),
  },
  category: {
    label: i18n('entities.reportCard.fields.category'),
    render: filterRenders.enumerator('entities.reportCard.enumerators.category',),
  },
}

function ReportCardListFilter(props) {
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
                  <StudentAutocompleteFormItem  
                    name="student"
                    label={i18n('entities.reportCard.fields.student')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="reportDateRange"
                    label={i18n('entities.reportCard.fields.reportDateRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="category"
                    label={i18n('entities.reportCard.fields.category')}
                    options={reportCardEnumerators.category.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.reportCard.enumerators.category.${value}`,
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

export default ReportCardListFilter;