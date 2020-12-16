import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import school from 'src/modules/school/schoolReducers';
import student from 'src/modules/student/studentReducers';
import household from 'src/modules/household/householdReducers';
import staff from 'src/modules/staff/staffReducers';
import section from 'src/modules/section/sectionReducers';
import course from 'src/modules/course/courseReducers';
import assignment from 'src/modules/assignment/assignmentReducers';
import examination from 'src/modules/examination/examinationReducers';
import subject from 'src/modules/subject/subjectReducers';
import assignmentResult from 'src/modules/assignmentResult/assignmentResultReducers';
import examResult from 'src/modules/examResult/examResultReducers';
import reportCard from 'src/modules/reportCard/reportCardReducers';
import studentDoc from 'src/modules/studentDoc/studentDocReducers';
import studentAttendance from 'src/modules/studentAttendance/studentAttendanceReducers';
import staffAttendance from 'src/modules/staffAttendance/staffAttendanceReducers';
import studentPayment from 'src/modules/studentPayment/studentPaymentReducers';
import enrollment from 'src/modules/enrollment/enrollmentReducers';
import sponsor from 'src/modules/sponsor/sponsorReducers';
import sponsorPayment from 'src/modules/sponsorPayment/sponsorPaymentReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    school,
    student,
    household,
    staff,
    section,
    course,
    assignment,
    examination,
    subject,
    assignmentResult,
    examResult,
    reportCard,
    studentDoc,
    studentAttendance,
    staffAttendance,
    studentPayment,
    enrollment,
    sponsor,
    sponsorPayment,
  });
