import Roles from 'src/security/roles';
import Storage from 'src/security/storage';
import Plans   from 'src/security/plans';

const storage = Storage.values;
const roles   = Roles.values;
const plans   = Plans.values;

class Permissions {
  static get values() {
    return {
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free], 
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      planEdit: {
        id: 'planEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],

      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },
      schoolImport: {
        id: 'schoolImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      schoolCreate: {
        id: 'schoolCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      schoolEdit: {
        id: 'schoolEdit',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      schoolDestroy: {
        id: 'schoolDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      schoolRead: {
        id: 'schoolRead',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher, roles.accounting, roles.donor],
        allowedPlans: [plans.free],
      },
      schoolAutocomplete: {
        id: 'schoolAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher, roles.accounting, roles.donor],
        allowedPlans: [plans.free],
      },

      studentImport: {
        id: 'studentImport',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
      },
      studentCreate: {
        id: 'studentCreate',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.studentPicture,
        ],
      },
      studentEdit: {
        id: 'studentEdit',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.studentPicture,
        ],
      },
      studentDestroy: {
        id: 'studentDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.studentPicture,
        ],
      },
      studentRead: {
        id: 'studentRead',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher, roles.accounting, roles.donor],
        allowedPlans: [plans.free],
      },
      studentAutocomplete: {
        id: 'studentAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher, roles.accounting, roles.donor],
        allowedPlans: [plans.free],
      },

      householdImport: {
        id: 'householdImport',
        allowedRoles: [roles.admin, roles.schooladmin, roles.accounting],
        allowedPlans: [plans.free],
      },
      householdCreate: {
        id: 'householdCreate',
        allowedRoles: [roles.admin, roles.schooladmin, roles.accounting],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      householdEdit: {
        id: 'householdEdit',
        allowedRoles: [roles.admin, roles.schooladmin, roles.accounting],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      householdDestroy: {
        id: 'householdDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      householdRead: {
        id: 'householdRead',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher, roles.accounting, roles.donor],
        allowedPlans: [plans.free],
      },
      householdAutocomplete: {
        id: 'householdAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher, roles.accounting, roles.donor],
        allowedPlans: [plans.free],
      },

      staffImport: {
        id: 'staffImport',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
      },
      staffCreate: {
        id: 'staffCreate',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.staffPicture,
        ],
      },
      staffEdit: {
        id: 'staffEdit',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.staffPicture,
        ],
      },
      staffDestroy: {
        id: 'staffDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.staffPicture,
        ],
      },
      staffRead: {
        id: 'staffRead',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
      },
      staffAutocomplete: {
        id: 'staffAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
      },

      sectionImport: {
        id: 'sectionImport',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
      },
      sectionCreate: {
        id: 'sectionCreate',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      sectionEdit: {
        id: 'sectionEdit',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      sectionDestroy: {
        id: 'sectionDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      sectionRead: {
        id: 'sectionRead',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher, roles.accounting],
        allowedPlans: [plans.free],
      },
      sectionAutocomplete: {
        id: 'sectionAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher, roles.accounting],
        allowedPlans: [plans.free],
      },

      courseImport: {
        id: 'courseImport',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
      },
      courseCreate: {
        id: 'courseCreate',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      courseEdit: {
        id: 'courseEdit',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      courseDestroy: {
        id: 'courseDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      courseRead: {
        id: 'courseRead',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },
      courseAutocomplete: {
        id: 'courseAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },

      assignmentImport: {
        id: 'assignmentImport',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },
      assignmentCreate: {
        id: 'assignmentCreate',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      assignmentEdit: {
        id: 'assignmentEdit',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      assignmentDestroy: {
        id: 'assignmentDestroy',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      assignmentRead: {
        id: 'assignmentRead',
        allowedRoles: [roles.admin,roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },
      assignmentAutocomplete: {
        id: 'assignmentAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },

      examinationImport: {
        id: 'examinationImport',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },
      examinationCreate: {
        id: 'examinationCreate',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      examinationEdit: {
        id: 'examinationEdit',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      examinationDestroy: {
        id: 'examinationDestroy',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      examinationRead: {
        id: 'examinationRead',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },
      examinationAutocomplete: {
        id: 'examinationAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },

      subjectImport: {
        id: 'subjectImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      subjectCreate: {
        id: 'subjectCreate',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      subjectEdit: {
        id: 'subjectEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      subjectDestroy: {
        id: 'subjectDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      subjectRead: {
        id: 'subjectRead',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },
      subjectAutocomplete: {
        id: 'subjectAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },

      assignmentResultImport: {
        id: 'assignmentResultImport',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },
      assignmentResultCreate: {
        id: 'assignmentResultCreate',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      assignmentResultEdit: {
        id: 'assignmentResultEdit',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      assignmentResultDestroy: {
        id: 'assignmentResultDestroy',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      assignmentResultRead: {
        id: 'assignmentResultRead',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },
      assignmentResultAutocomplete: {
        id: 'assignmentResultAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },

      examResultImport: {
        id: 'examResultImport',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },
      examResultCreate: {
        id: 'examResultCreate',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      examResultEdit: {
        id: 'examResultEdit',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      examResultDestroy: {
        id: 'examResultDestroy',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      examResultRead: {
        id: 'examResultRead',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },
      examResultAutocomplete: {
        id: 'examResultAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },

      reportCardImport: {
        id: 'reportCardImport',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
      },
      reportCardCreate: {
        id: 'reportCardCreate',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.reportCardReportCardAttachment,
        ],
      },
      reportCardEdit: {
        id: 'reportCardEdit',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.reportCardReportCardAttachment,
        ],
      },
      reportCardDestroy: {
        id: 'reportCardDestroy',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.reportCardReportCardAttachment,
        ],
      },
      reportCardRead: {
        id: 'reportCardRead',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },
      reportCardAutocomplete: {
        id: 'reportCardAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },

      studentDocImport: {
        id: 'studentDocImport',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
      },
      studentDocCreate: {
        id: 'studentDocCreate',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.studentDocDocAttachment,
        ],
      },
      studentDocEdit: {
        id: 'studentDocEdit',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.studentDocDocAttachment,
        ],
      },
      studentDocDestroy: {
        id: 'studentDocDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [
          storage.studentDocDocAttachment,
        ],
      },
      studentDocRead: {
        id: 'studentDocRead',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },
      studentDocAutocomplete: {
        id: 'studentDocAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },

      studentAttendanceImport: {
        id: 'studentAttendanceImport',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
      },
      studentAttendanceCreate: {
        id: 'studentAttendanceCreate',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      studentAttendanceEdit: {
        id: 'studentAttendanceEdit',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      studentAttendanceDestroy: {
        id: 'studentAttendanceDestroy',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      studentAttendanceRead: {
        id: 'studentAttendanceRead',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },
      studentAttendanceAutocomplete: {
        id: 'studentAttendanceAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },

      staffAttendanceImport: {
        id: 'staffAttendanceImport',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
      },
      staffAttendanceCreate: {
        id: 'staffAttendanceCreate',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      staffAttendanceEdit: {
        id: 'staffAttendanceEdit',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      staffAttendanceDestroy: {
        id: 'staffAttendanceDestroy',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      staffAttendanceRead: {
        id: 'staffAttendanceRead',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
      },
      staffAttendanceAutocomplete: {
        id: 'staffAttendanceAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
      },

      studentPaymentImport: {
        id: 'studentPaymentImport',
        allowedRoles: [roles.admin, roles.schooladmin, roles.accounting],
        allowedPlans: [plans.free],
      },
      studentPaymentCreate: {
        id: 'studentPaymentCreate',
        allowedRoles: [roles.admin, roles.schooladmin, roles.accounting],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      studentPaymentEdit: {
        id: 'studentPaymentEdit',
        allowedRoles: [roles.admin, roles.schooladmin, roles.accounting],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      studentPaymentDestroy: {
        id: 'studentPaymentDestroy',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      studentPaymentRead: {
        id: 'studentPaymentRead',
        allowedRoles: [roles.admin, roles.schooladmin, roles.accounting],
        allowedPlans: [plans.free],
      },
      studentPaymentAutocomplete: {
        id: 'studentPaymentAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin, roles.accounting],
        allowedPlans: [plans.free],
      },

      enrollmentImport: {
        id: 'enrollmentImport',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
      },
      enrollmentCreate: {
        id: 'enrollmentCreate',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      enrollmentEdit: {
        id: 'enrollmentEdit',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      enrollmentDestroy: {
        id: 'enrollmentDestroy',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      enrollmentRead: {
        id: 'enrollmentRead',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },
      enrollmentAutocomplete: {
        id: 'enrollmentAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin, roles.teacher],
        allowedPlans: [plans.free],
      },

      sponsorImport: {
        id: 'sponsorImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
      },
      sponsorCreate: {
        id: 'sponsorCreate',
        allowedRoles: [roles.admin, roles.schooladmin, roles.accounting],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      sponsorEdit: {
        id: 'sponsorEdit',
        allowedRoles: [roles.admin, roles.schooladmin, roles.accounting],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      sponsorDestroy: {
        id: 'sponsorDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      sponsorRead: {
        id: 'sponsorRead',
        allowedRoles: [roles.admin, roles.schooladmin, roles.accounting],
        allowedPlans: [plans.free],
      },
      sponsorAutocomplete: {
        id: 'sponsorAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin, roles.accounting],
        allowedPlans: [plans.free],
      },

      sponsorPaymentImport: {
        id: 'sponsorPaymentImport',
        allowedRoles: [roles.admin, roles.schooladmin, roles.accounting],
        allowedPlans: [plans.free],
      },
      sponsorPaymentCreate: {
        id: 'sponsorPaymentCreate',
        allowedRoles: [roles.admin, roles.schooladmin, roles.accounting],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      sponsorPaymentEdit: {
        id: 'sponsorPaymentEdit',
        allowedRoles: [roles.admin, roles.schooladmin, roles.accounting],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      sponsorPaymentDestroy: {
        id: 'sponsorPaymentDestroy',
        allowedRoles: [roles.admin, roles.schooladmin],
        allowedPlans: [plans.free],
        allowedStorage: [],
      },
      sponsorPaymentRead: {
        id: 'sponsorPaymentRead',
        allowedRoles: [roles.admin, roles.schooladmin, roles.accounting],
        allowedPlans: [plans.free],
      },
      sponsorPaymentAutocomplete: {
        id: 'sponsorPaymentAutocomplete',
        allowedRoles: [roles.admin, roles.schooladmin, roles.accounting],
        allowedPlans: [plans.free],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
