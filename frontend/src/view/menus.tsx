import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import React from 'react';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import config from 'src/config';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: <DashboardIcon />,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: <CreditCardOutlinedIcon />,
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: <PersonIcon />,
  },

  {
    path: '/audit-logs',
    icon: <HistoryIcon />,
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: <SettingsIcon />,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/school',
    permissionRequired: permissions.schoolRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.school.menu'),
  },

  {
    path: '/student',
    permissionRequired: permissions.studentRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.student.menu'),
  },

  {
    path: '/household',
    permissionRequired: permissions.householdRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.household.menu'),
  },

  {
    path: '/staff',
    permissionRequired: permissions.staffRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.staff.menu'),
  },

  {
    path: '/section',
    permissionRequired: permissions.sectionRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.section.menu'),
  },

  {
    path: '/course',
    permissionRequired: permissions.courseRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.course.menu'),
  },

  {
    path: '/assignment',
    permissionRequired: permissions.assignmentRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.assignment.menu'),
  },

  {
    path: '/examination',
    permissionRequired: permissions.examinationRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.examination.menu'),
  },

  {
    path: '/subject',
    permissionRequired: permissions.subjectRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.subject.menu'),
  },

  {
    path: '/assignment-result',
    permissionRequired: permissions.assignmentResultRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.assignmentResult.menu'),
  },

  {
    path: '/exam-result',
    permissionRequired: permissions.examResultRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.examResult.menu'),
  },

  {
    path: '/report-card',
    permissionRequired: permissions.reportCardRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.reportCard.menu'),
  },

  {
    path: '/student-doc',
    permissionRequired: permissions.studentDocRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.studentDoc.menu'),
  },

  {
    path: '/student-attendance',
    permissionRequired: permissions.studentAttendanceRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.studentAttendance.menu'),
  },

  {
    path: '/staff-attendance',
    permissionRequired: permissions.staffAttendanceRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.staffAttendance.menu'),
  },

  {
    path: '/student-payment',
    permissionRequired: permissions.studentPaymentRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.studentPayment.menu'),
  },

  {
    path: '/enrollment',
    permissionRequired: permissions.enrollmentRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.enrollment.menu'),
  },

  {
    path: '/sponsor',
    permissionRequired: permissions.sponsorRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.sponsor.menu'),
  },

  {
    path: '/sponsor-payment',
    permissionRequired: permissions.sponsorPaymentRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.sponsorPayment.menu'),
  },
].filter(Boolean);
