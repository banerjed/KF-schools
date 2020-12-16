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
import actions from 'src/modules/staffAttendance/list/staffAttendanceListActions';
import selectors from 'src/modules/staffAttendance/list/staffAttendanceListSelectors';
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
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import StaffAutocompleteFormItem from 'src/view/staff/autocomplete/StaffAutocompleteFormItem';

const schema = yup.object().shape({
  staff: yupFilterSchemas.relationToOne(
    i18n('entities.staffAttendance.fields.staff'),
  ),
  schoolDateRange: yupFilterSchemas.dateRange(
    i18n('entities.staffAttendance.fields.schoolDateRange'),
  ),
  hasWorked: yupFilterSchemas.boolean(
    i18n('entities.staffAttendance.fields.hasWorked'),
  ),
  startTimeRange: yupFilterSchemas.datetimeRange(
    i18n('entities.staffAttendance.fields.startTimeRange'),
  ),
  endTimeRange: yupFilterSchemas.datetimeRange(
    i18n('entities.staffAttendance.fields.endTimeRange'),
  ),
});

const emptyValues = {
  staff: null,
  schoolDateRange: [],
  hasWorked: null,
  startTimeRange: [],
  endTimeRange: [],
}

const previewRenders = {
  staff: {
      label: i18n('entities.staffAttendance.fields.staff'),
      render: filterRenders.relationToOne(),
    },
  schoolDateRange: {
    label: i18n('entities.staffAttendance.fields.schoolDateRange'),
    render: filterRenders.dateRange(),
  },
  hasWorked: {
    label: i18n('entities.staffAttendance.fields.hasWorked'),
    render: filterRenders.boolean(),
  },
  startTimeRange: {
    label: i18n('entities.staffAttendance.fields.startTimeRange'),
    render: filterRenders.datetimeRange(),
  },
  endTimeRange: {
    label: i18n('entities.staffAttendance.fields.endTimeRange'),
    render: filterRenders.datetimeRange(),
  },
}

function StaffAttendanceListFilter(props) {
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
                  <StaffAutocompleteFormItem  
                    name="staff"
                    label={i18n('entities.staffAttendance.fields.staff')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="schoolDateRange"
                    label={i18n('entities.staffAttendance.fields.schoolDateRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="hasWorked"
                    label={i18n('entities.staffAttendance.fields.hasWorked')}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="startTimeRange"
                    label={i18n('entities.staffAttendance.fields.startTimeRange')}    
                    showTime
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="endTimeRange"
                    label={i18n('entities.staffAttendance.fields.endTimeRange')}    
                    showTime
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

export default StaffAttendanceListFilter;