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
import actions from 'src/modules/studentPayment/list/studentPaymentListActions';
import selectors from 'src/modules/studentPayment/list/studentPaymentListSelectors';
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
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import studentPaymentEnumerators from 'src/modules/studentPayment/studentPaymentEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import HouseholdAutocompleteFormItem from 'src/view/household/autocomplete/HouseholdAutocompleteFormItem';
import StudentAutocompleteFormItem from 'src/view/student/autocomplete/StudentAutocompleteFormItem';

const schema = yup.object().shape({
  household: yupFilterSchemas.relationToOne(
    i18n('entities.studentPayment.fields.household'),
  ),
  student: yupFilterSchemas.relationToOne(
    i18n('entities.studentPayment.fields.student'),
  ),
  paymentDateRange: yupFilterSchemas.dateRange(
    i18n('entities.studentPayment.fields.paymentDateRange'),
  ),
  paymentAmountRange: yupFilterSchemas.decimalRange(
    i18n('entities.studentPayment.fields.paymentAmountRange'),
  ),
  paymentType: yupFilterSchemas.enumerator(
    i18n('entities.studentPayment.fields.paymentType'),
  ),
});

const emptyValues = {
  household: null,
  student: null,
  paymentDateRange: [],
  paymentAmountRange: [],
  paymentType: null,
}

const previewRenders = {
  household: {
      label: i18n('entities.studentPayment.fields.household'),
      render: filterRenders.relationToOne(),
    },
  student: {
      label: i18n('entities.studentPayment.fields.student'),
      render: filterRenders.relationToOne(),
    },
  paymentDateRange: {
    label: i18n('entities.studentPayment.fields.paymentDateRange'),
    render: filterRenders.dateRange(),
  },
  paymentAmountRange: {
    label: i18n('entities.studentPayment.fields.paymentAmountRange'),
    render: filterRenders.decimalRange(2),
  },
  paymentType: {
    label: i18n('entities.studentPayment.fields.paymentType'),
    render: filterRenders.enumerator('entities.studentPayment.enumerators.paymentType',),
  },
}

function StudentPaymentListFilter(props) {
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
                  <HouseholdAutocompleteFormItem  
                    name="household"
                    label={i18n('entities.studentPayment.fields.household')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <StudentAutocompleteFormItem  
                    name="student"
                    label={i18n('entities.studentPayment.fields.student')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="paymentDateRange"
                    label={i18n('entities.studentPayment.fields.paymentDateRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="paymentAmountRange"
                    label={i18n('entities.studentPayment.fields.paymentAmountRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="paymentType"
                    label={i18n('entities.studentPayment.fields.paymentType')}
                    options={studentPaymentEnumerators.paymentType.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.studentPayment.enumerators.paymentType.${value}`,
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

export default StudentPaymentListFilter;