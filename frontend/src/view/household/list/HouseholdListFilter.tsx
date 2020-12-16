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
import actions from 'src/modules/household/list/householdListActions';
import selectors from 'src/modules/household/list/householdListSelectors';
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

const schema = yup.object().shape({
  familyLastName: yupFilterSchemas.string(
    i18n('entities.household.fields.familyLastName'),
  ),
  zipcode: yupFilterSchemas.string(
    i18n('entities.household.fields.zipcode'),
  ),
  primaryGuardianFullName: yupFilterSchemas.string(
    i18n('entities.household.fields.primaryGuardianFullName'),
  ),
  primaryGuardianCellPhone: yupFilterSchemas.string(
    i18n('entities.household.fields.primaryGuardianCellPhone'),
  ),
});

const emptyValues = {
  familyLastName: null,
  zipcode: null,
  primaryGuardianFullName: null,
  primaryGuardianCellPhone: null,
}

const previewRenders = {
  familyLastName: {
    label: i18n('entities.household.fields.familyLastName'),
    render: filterRenders.generic(),
  },
  zipcode: {
    label: i18n('entities.household.fields.zipcode'),
    render: filterRenders.generic(),
  },
  primaryGuardianFullName: {
    label: i18n('entities.household.fields.primaryGuardianFullName'),
    render: filterRenders.generic(),
  },
  primaryGuardianCellPhone: {
    label: i18n('entities.household.fields.primaryGuardianCellPhone'),
    render: filterRenders.generic(),
  },
}

function HouseholdListFilter(props) {
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
                    name="familyLastName"
                    label={i18n('entities.household.fields.familyLastName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="zipcode"
                    label={i18n('entities.household.fields.zipcode')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="primaryGuardianFullName"
                    label={i18n('entities.household.fields.primaryGuardianFullName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="primaryGuardianCellPhone"
                    label={i18n('entities.household.fields.primaryGuardianCellPhone')}      
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

export default HouseholdListFilter;