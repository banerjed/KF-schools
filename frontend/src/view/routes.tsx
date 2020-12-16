import Permissions from 'src/security/permissions';
import config from 'src/config';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },
  
  {
    path: '/school',
    loader: () =>
      import('src/view/school/list/SchoolListPage'),
    permissionRequired: permissions.schoolRead,
    exact: true,
  },
  {
    path: '/school/new',
    loader: () =>
      import('src/view/school/form/SchoolFormPage'),
    permissionRequired: permissions.schoolCreate,
    exact: true,
  },
  {
    path: '/school/importer',
    loader: () =>
      import(
        'src/view/school/importer/SchoolImporterPage'
      ),
    permissionRequired: permissions.schoolImport,
    exact: true,
  },
  {
    path: '/school/:id/edit',
    loader: () =>
      import('src/view/school/form/SchoolFormPage'),
    permissionRequired: permissions.schoolEdit,
    exact: true,
  },
  {
    path: '/school/:id',
    loader: () =>
      import('src/view/school/view/SchoolViewPage'),
    permissionRequired: permissions.schoolRead,
    exact: true,
  },

  {
    path: '/student',
    loader: () =>
      import('src/view/student/list/StudentListPage'),
    permissionRequired: permissions.studentRead,
    exact: true,
  },
  {
    path: '/student/new',
    loader: () =>
      import('src/view/student/form/StudentFormPage'),
    permissionRequired: permissions.studentCreate,
    exact: true,
  },
  {
    path: '/student/importer',
    loader: () =>
      import(
        'src/view/student/importer/StudentImporterPage'
      ),
    permissionRequired: permissions.studentImport,
    exact: true,
  },
  {
    path: '/student/:id/edit',
    loader: () =>
      import('src/view/student/form/StudentFormPage'),
    permissionRequired: permissions.studentEdit,
    exact: true,
  },
  {
    path: '/student/:id',
    loader: () =>
      import('src/view/student/view/StudentViewPage'),
    permissionRequired: permissions.studentRead,
    exact: true,
  },

  {
    path: '/household',
    loader: () =>
      import('src/view/household/list/HouseholdListPage'),
    permissionRequired: permissions.householdRead,
    exact: true,
  },
  {
    path: '/household/new',
    loader: () =>
      import('src/view/household/form/HouseholdFormPage'),
    permissionRequired: permissions.householdCreate,
    exact: true,
  },
  {
    path: '/household/importer',
    loader: () =>
      import(
        'src/view/household/importer/HouseholdImporterPage'
      ),
    permissionRequired: permissions.householdImport,
    exact: true,
  },
  {
    path: '/household/:id/edit',
    loader: () =>
      import('src/view/household/form/HouseholdFormPage'),
    permissionRequired: permissions.householdEdit,
    exact: true,
  },
  {
    path: '/household/:id',
    loader: () =>
      import('src/view/household/view/HouseholdViewPage'),
    permissionRequired: permissions.householdRead,
    exact: true,
  },

  {
    path: '/staff',
    loader: () =>
      import('src/view/staff/list/StaffListPage'),
    permissionRequired: permissions.staffRead,
    exact: true,
  },
  {
    path: '/staff/new',
    loader: () =>
      import('src/view/staff/form/StaffFormPage'),
    permissionRequired: permissions.staffCreate,
    exact: true,
  },
  {
    path: '/staff/importer',
    loader: () =>
      import(
        'src/view/staff/importer/StaffImporterPage'
      ),
    permissionRequired: permissions.staffImport,
    exact: true,
  },
  {
    path: '/staff/:id/edit',
    loader: () =>
      import('src/view/staff/form/StaffFormPage'),
    permissionRequired: permissions.staffEdit,
    exact: true,
  },
  {
    path: '/staff/:id',
    loader: () =>
      import('src/view/staff/view/StaffViewPage'),
    permissionRequired: permissions.staffRead,
    exact: true,
  },

  {
    path: '/section',
    loader: () =>
      import('src/view/section/list/SectionListPage'),
    permissionRequired: permissions.sectionRead,
    exact: true,
  },
  {
    path: '/section/new',
    loader: () =>
      import('src/view/section/form/SectionFormPage'),
    permissionRequired: permissions.sectionCreate,
    exact: true,
  },
  {
    path: '/section/importer',
    loader: () =>
      import(
        'src/view/section/importer/SectionImporterPage'
      ),
    permissionRequired: permissions.sectionImport,
    exact: true,
  },
  {
    path: '/section/:id/edit',
    loader: () =>
      import('src/view/section/form/SectionFormPage'),
    permissionRequired: permissions.sectionEdit,
    exact: true,
  },
  {
    path: '/section/:id',
    loader: () =>
      import('src/view/section/view/SectionViewPage'),
    permissionRequired: permissions.sectionRead,
    exact: true,
  },

  {
    path: '/course',
    loader: () =>
      import('src/view/course/list/CourseListPage'),
    permissionRequired: permissions.courseRead,
    exact: true,
  },
  {
    path: '/course/new',
    loader: () =>
      import('src/view/course/form/CourseFormPage'),
    permissionRequired: permissions.courseCreate,
    exact: true,
  },
  {
    path: '/course/importer',
    loader: () =>
      import(
        'src/view/course/importer/CourseImporterPage'
      ),
    permissionRequired: permissions.courseImport,
    exact: true,
  },
  {
    path: '/course/:id/edit',
    loader: () =>
      import('src/view/course/form/CourseFormPage'),
    permissionRequired: permissions.courseEdit,
    exact: true,
  },
  {
    path: '/course/:id',
    loader: () =>
      import('src/view/course/view/CourseViewPage'),
    permissionRequired: permissions.courseRead,
    exact: true,
  },

  {
    path: '/assignment',
    loader: () =>
      import('src/view/assignment/list/AssignmentListPage'),
    permissionRequired: permissions.assignmentRead,
    exact: true,
  },
  {
    path: '/assignment/new',
    loader: () =>
      import('src/view/assignment/form/AssignmentFormPage'),
    permissionRequired: permissions.assignmentCreate,
    exact: true,
  },
  {
    path: '/assignment/importer',
    loader: () =>
      import(
        'src/view/assignment/importer/AssignmentImporterPage'
      ),
    permissionRequired: permissions.assignmentImport,
    exact: true,
  },
  {
    path: '/assignment/:id/edit',
    loader: () =>
      import('src/view/assignment/form/AssignmentFormPage'),
    permissionRequired: permissions.assignmentEdit,
    exact: true,
  },
  {
    path: '/assignment/:id',
    loader: () =>
      import('src/view/assignment/view/AssignmentViewPage'),
    permissionRequired: permissions.assignmentRead,
    exact: true,
  },

  {
    path: '/examination',
    loader: () =>
      import('src/view/examination/list/ExaminationListPage'),
    permissionRequired: permissions.examinationRead,
    exact: true,
  },
  {
    path: '/examination/new',
    loader: () =>
      import('src/view/examination/form/ExaminationFormPage'),
    permissionRequired: permissions.examinationCreate,
    exact: true,
  },
  {
    path: '/examination/importer',
    loader: () =>
      import(
        'src/view/examination/importer/ExaminationImporterPage'
      ),
    permissionRequired: permissions.examinationImport,
    exact: true,
  },
  {
    path: '/examination/:id/edit',
    loader: () =>
      import('src/view/examination/form/ExaminationFormPage'),
    permissionRequired: permissions.examinationEdit,
    exact: true,
  },
  {
    path: '/examination/:id',
    loader: () =>
      import('src/view/examination/view/ExaminationViewPage'),
    permissionRequired: permissions.examinationRead,
    exact: true,
  },

  {
    path: '/subject',
    loader: () =>
      import('src/view/subject/list/SubjectListPage'),
    permissionRequired: permissions.subjectRead,
    exact: true,
  },
  {
    path: '/subject/new',
    loader: () =>
      import('src/view/subject/form/SubjectFormPage'),
    permissionRequired: permissions.subjectCreate,
    exact: true,
  },
  {
    path: '/subject/importer',
    loader: () =>
      import(
        'src/view/subject/importer/SubjectImporterPage'
      ),
    permissionRequired: permissions.subjectImport,
    exact: true,
  },
  {
    path: '/subject/:id/edit',
    loader: () =>
      import('src/view/subject/form/SubjectFormPage'),
    permissionRequired: permissions.subjectEdit,
    exact: true,
  },
  {
    path: '/subject/:id',
    loader: () =>
      import('src/view/subject/view/SubjectViewPage'),
    permissionRequired: permissions.subjectRead,
    exact: true,
  },

  {
    path: '/assignment-result',
    loader: () =>
      import('src/view/assignmentResult/list/AssignmentResultListPage'),
    permissionRequired: permissions.assignmentResultRead,
    exact: true,
  },
  {
    path: '/assignment-result/new',
    loader: () =>
      import('src/view/assignmentResult/form/AssignmentResultFormPage'),
    permissionRequired: permissions.assignmentResultCreate,
    exact: true,
  },
  {
    path: '/assignment-result/importer',
    loader: () =>
      import(
        'src/view/assignmentResult/importer/AssignmentResultImporterPage'
      ),
    permissionRequired: permissions.assignmentResultImport,
    exact: true,
  },
  {
    path: '/assignment-result/:id/edit',
    loader: () =>
      import('src/view/assignmentResult/form/AssignmentResultFormPage'),
    permissionRequired: permissions.assignmentResultEdit,
    exact: true,
  },
  {
    path: '/assignment-result/:id',
    loader: () =>
      import('src/view/assignmentResult/view/AssignmentResultViewPage'),
    permissionRequired: permissions.assignmentResultRead,
    exact: true,
  },

  {
    path: '/exam-result',
    loader: () =>
      import('src/view/examResult/list/ExamResultListPage'),
    permissionRequired: permissions.examResultRead,
    exact: true,
  },
  {
    path: '/exam-result/new',
    loader: () =>
      import('src/view/examResult/form/ExamResultFormPage'),
    permissionRequired: permissions.examResultCreate,
    exact: true,
  },
  {
    path: '/exam-result/importer',
    loader: () =>
      import(
        'src/view/examResult/importer/ExamResultImporterPage'
      ),
    permissionRequired: permissions.examResultImport,
    exact: true,
  },
  {
    path: '/exam-result/:id/edit',
    loader: () =>
      import('src/view/examResult/form/ExamResultFormPage'),
    permissionRequired: permissions.examResultEdit,
    exact: true,
  },
  {
    path: '/exam-result/:id',
    loader: () =>
      import('src/view/examResult/view/ExamResultViewPage'),
    permissionRequired: permissions.examResultRead,
    exact: true,
  },

  {
    path: '/report-card',
    loader: () =>
      import('src/view/reportCard/list/ReportCardListPage'),
    permissionRequired: permissions.reportCardRead,
    exact: true,
  },
  {
    path: '/report-card/new',
    loader: () =>
      import('src/view/reportCard/form/ReportCardFormPage'),
    permissionRequired: permissions.reportCardCreate,
    exact: true,
  },
  {
    path: '/report-card/importer',
    loader: () =>
      import(
        'src/view/reportCard/importer/ReportCardImporterPage'
      ),
    permissionRequired: permissions.reportCardImport,
    exact: true,
  },
  {
    path: '/report-card/:id/edit',
    loader: () =>
      import('src/view/reportCard/form/ReportCardFormPage'),
    permissionRequired: permissions.reportCardEdit,
    exact: true,
  },
  {
    path: '/report-card/:id',
    loader: () =>
      import('src/view/reportCard/view/ReportCardViewPage'),
    permissionRequired: permissions.reportCardRead,
    exact: true,
  },

  {
    path: '/student-doc',
    loader: () =>
      import('src/view/studentDoc/list/StudentDocListPage'),
    permissionRequired: permissions.studentDocRead,
    exact: true,
  },
  {
    path: '/student-doc/new',
    loader: () =>
      import('src/view/studentDoc/form/StudentDocFormPage'),
    permissionRequired: permissions.studentDocCreate,
    exact: true,
  },
  {
    path: '/student-doc/importer',
    loader: () =>
      import(
        'src/view/studentDoc/importer/StudentDocImporterPage'
      ),
    permissionRequired: permissions.studentDocImport,
    exact: true,
  },
  {
    path: '/student-doc/:id/edit',
    loader: () =>
      import('src/view/studentDoc/form/StudentDocFormPage'),
    permissionRequired: permissions.studentDocEdit,
    exact: true,
  },
  {
    path: '/student-doc/:id',
    loader: () =>
      import('src/view/studentDoc/view/StudentDocViewPage'),
    permissionRequired: permissions.studentDocRead,
    exact: true,
  },

  {
    path: '/student-attendance',
    loader: () =>
      import('src/view/studentAttendance/list/StudentAttendanceListPage'),
    permissionRequired: permissions.studentAttendanceRead,
    exact: true,
  },
  {
    path: '/student-attendance/new',
    loader: () =>
      import('src/view/studentAttendance/form/StudentAttendanceFormPage'),
    permissionRequired: permissions.studentAttendanceCreate,
    exact: true,
  },
  {
    path: '/student-attendance/importer',
    loader: () =>
      import(
        'src/view/studentAttendance/importer/StudentAttendanceImporterPage'
      ),
    permissionRequired: permissions.studentAttendanceImport,
    exact: true,
  },
  {
    path: '/student-attendance/:id/edit',
    loader: () =>
      import('src/view/studentAttendance/form/StudentAttendanceFormPage'),
    permissionRequired: permissions.studentAttendanceEdit,
    exact: true,
  },
  {
    path: '/student-attendance/:id',
    loader: () =>
      import('src/view/studentAttendance/view/StudentAttendanceViewPage'),
    permissionRequired: permissions.studentAttendanceRead,
    exact: true,
  },

  {
    path: '/staff-attendance',
    loader: () =>
      import('src/view/staffAttendance/list/StaffAttendanceListPage'),
    permissionRequired: permissions.staffAttendanceRead,
    exact: true,
  },
  {
    path: '/staff-attendance/new',
    loader: () =>
      import('src/view/staffAttendance/form/StaffAttendanceFormPage'),
    permissionRequired: permissions.staffAttendanceCreate,
    exact: true,
  },
  {
    path: '/staff-attendance/importer',
    loader: () =>
      import(
        'src/view/staffAttendance/importer/StaffAttendanceImporterPage'
      ),
    permissionRequired: permissions.staffAttendanceImport,
    exact: true,
  },
  {
    path: '/staff-attendance/:id/edit',
    loader: () =>
      import('src/view/staffAttendance/form/StaffAttendanceFormPage'),
    permissionRequired: permissions.staffAttendanceEdit,
    exact: true,
  },
  {
    path: '/staff-attendance/:id',
    loader: () =>
      import('src/view/staffAttendance/view/StaffAttendanceViewPage'),
    permissionRequired: permissions.staffAttendanceRead,
    exact: true,
  },

  {
    path: '/student-payment',
    loader: () =>
      import('src/view/studentPayment/list/StudentPaymentListPage'),
    permissionRequired: permissions.studentPaymentRead,
    exact: true,
  },
  {
    path: '/student-payment/new',
    loader: () =>
      import('src/view/studentPayment/form/StudentPaymentFormPage'),
    permissionRequired: permissions.studentPaymentCreate,
    exact: true,
  },
  {
    path: '/student-payment/importer',
    loader: () =>
      import(
        'src/view/studentPayment/importer/StudentPaymentImporterPage'
      ),
    permissionRequired: permissions.studentPaymentImport,
    exact: true,
  },
  {
    path: '/student-payment/:id/edit',
    loader: () =>
      import('src/view/studentPayment/form/StudentPaymentFormPage'),
    permissionRequired: permissions.studentPaymentEdit,
    exact: true,
  },
  {
    path: '/student-payment/:id',
    loader: () =>
      import('src/view/studentPayment/view/StudentPaymentViewPage'),
    permissionRequired: permissions.studentPaymentRead,
    exact: true,
  },

  {
    path: '/enrollment',
    loader: () =>
      import('src/view/enrollment/list/EnrollmentListPage'),
    permissionRequired: permissions.enrollmentRead,
    exact: true,
  },
  {
    path: '/enrollment/new',
    loader: () =>
      import('src/view/enrollment/form/EnrollmentFormPage'),
    permissionRequired: permissions.enrollmentCreate,
    exact: true,
  },
  {
    path: '/enrollment/importer',
    loader: () =>
      import(
        'src/view/enrollment/importer/EnrollmentImporterPage'
      ),
    permissionRequired: permissions.enrollmentImport,
    exact: true,
  },
  {
    path: '/enrollment/:id/edit',
    loader: () =>
      import('src/view/enrollment/form/EnrollmentFormPage'),
    permissionRequired: permissions.enrollmentEdit,
    exact: true,
  },
  {
    path: '/enrollment/:id',
    loader: () =>
      import('src/view/enrollment/view/EnrollmentViewPage'),
    permissionRequired: permissions.enrollmentRead,
    exact: true,
  },

  {
    path: '/sponsor',
    loader: () =>
      import('src/view/sponsor/list/SponsorListPage'),
    permissionRequired: permissions.sponsorRead,
    exact: true,
  },
  {
    path: '/sponsor/new',
    loader: () =>
      import('src/view/sponsor/form/SponsorFormPage'),
    permissionRequired: permissions.sponsorCreate,
    exact: true,
  },
  {
    path: '/sponsor/importer',
    loader: () =>
      import(
        'src/view/sponsor/importer/SponsorImporterPage'
      ),
    permissionRequired: permissions.sponsorImport,
    exact: true,
  },
  {
    path: '/sponsor/:id/edit',
    loader: () =>
      import('src/view/sponsor/form/SponsorFormPage'),
    permissionRequired: permissions.sponsorEdit,
    exact: true,
  },
  {
    path: '/sponsor/:id',
    loader: () =>
      import('src/view/sponsor/view/SponsorViewPage'),
    permissionRequired: permissions.sponsorRead,
    exact: true,
  },

  {
    path: '/sponsor-payment',
    loader: () =>
      import('src/view/sponsorPayment/list/SponsorPaymentListPage'),
    permissionRequired: permissions.sponsorPaymentRead,
    exact: true,
  },
  {
    path: '/sponsor-payment/new',
    loader: () =>
      import('src/view/sponsorPayment/form/SponsorPaymentFormPage'),
    permissionRequired: permissions.sponsorPaymentCreate,
    exact: true,
  },
  {
    path: '/sponsor-payment/importer',
    loader: () =>
      import(
        'src/view/sponsorPayment/importer/SponsorPaymentImporterPage'
      ),
    permissionRequired: permissions.sponsorPaymentImport,
    exact: true,
  },
  {
    path: '/sponsor-payment/:id/edit',
    loader: () =>
      import('src/view/sponsorPayment/form/SponsorPaymentFormPage'),
    permissionRequired: permissions.sponsorPaymentEdit,
    exact: true,
  },
  {
    path: '/sponsor-payment/:id',
    loader: () =>
      import('src/view/sponsorPayment/view/SponsorPaymentViewPage'),
    permissionRequired: permissions.sponsorPaymentRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
