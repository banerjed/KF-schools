export default (app) => {
  app.post(
    `/tenant/:tenantId/staff-attendance`,
    require('./staffAttendanceCreate').default,
  );
  app.put(
    `/tenant/:tenantId/staff-attendance/:id`,
    require('./staffAttendanceUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/staff-attendance/import`,
    require('./staffAttendanceImport').default,
  );
  app.delete(
    `/tenant/:tenantId/staff-attendance`,
    require('./staffAttendanceDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/staff-attendance/autocomplete`,
    require('./staffAttendanceAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/staff-attendance`,
    require('./staffAttendanceList').default,
  );
  app.get(
    `/tenant/:tenantId/staff-attendance/:id`,
    require('./staffAttendanceFind').default,
  );
};
