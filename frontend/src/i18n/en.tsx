const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
    filters: 'Filters',
  },

  app: {
    title: 'Application',
  },

  entities: {
    school: {
        name: 'school',
        label: 'Schools',
        menu: 'Schools',
        exporterFileName: 'school_export',
        list: {
          menu: 'Schools',
          title: 'Schools',
        },
        create: {
          success: 'School successfully saved',
        },
        update: {
          success: 'School successfully saved',
        },
        destroy: {
          success: 'School successfully deleted',
        },
        destroyAll: {
          success: 'School(s) successfully deleted',
        },
        edit: {
          title: 'Edit School',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'address': 'Address',
          'contactPhone': 'Contact Phone',
          'contactEmail': 'Contact Email',
          'contactFax': 'Contact Fax',
          'principalsName': 'Principals Name',
          'principalsEmail': 'Principals Email',
          'principalsPhone': 'Principals Phone',
          'vicePrincipalsName': 'Vice-Principals Name',
          'vicePrincipalsEmail': 'Vice-Principals Email',
          'vicePrincipalsPhone': 'Vice-Principals Phone',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New School',
        },
        view: {
          title: 'View School',
        },
        importer: {
          title: 'Import Schools',
          fileName: 'school_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    student: {
        name: 'student',
        label: 'Students',
        menu: 'Students',
        exporterFileName: 'student_export',
        list: {
          menu: 'Students',
          title: 'Students',
        },
        create: {
          success: 'Student successfully saved',
        },
        update: {
          success: 'Student successfully saved',
        },
        destroy: {
          success: 'Student successfully deleted',
        },
        destroyAll: {
          success: 'Student(s) successfully deleted',
        },
        edit: {
          title: 'Edit Student',
        },
        fields: {
          id: 'Id',
          'picture': 'Picture',
          'firstName': 'FirstName',
          'middleName': 'Middle Name',
          'lastName': 'Last Name',
          'fullName': 'Full Name',
          'school': 'School',
          'gender': 'Gender',
          'dateOfBirthRange': 'Date Of Birth',
          'dateOfBirth': 'Date Of Birth',
          'dateOfJoinRange': 'Date Of Joining School',
          'dateOfJoin': 'Date Of Joining School',
          'rollNumber': 'RollNumber',
          'household': 'Household',
          'enrollments': 'Enrollments',
          'payments': 'Payments',
          'currentSection': 'Current Section',
          'needsSponsorship': 'Needs Sponsorship',
          'aboutStudent': 'About Student',
          'currentSponsor': 'Current Sponsor',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'gender': {
            'Boy': 'Boy',
            'Girl': 'Girl',
          },
        },
        new: {
          title: 'New Student',
        },
        view: {
          title: 'View Student',
        },
        importer: {
          title: 'Import Students',
          fileName: 'student_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    household: {
        name: 'household',
        label: 'Households',
        menu: 'Households',
        exporterFileName: 'household_export',
        list: {
          menu: 'Households',
          title: 'Households',
        },
        create: {
          success: 'Household successfully saved',
        },
        update: {
          success: 'Household successfully saved',
        },
        destroy: {
          success: 'Household successfully deleted',
        },
        destroyAll: {
          success: 'Household(s) successfully deleted',
        },
        edit: {
          title: 'Edit Household',
        },
        fields: {
          id: 'Id',
          'familyLastName': 'Family Surname',
          'address': 'Address',
          'zipcode': 'Zipcode',
          'primaryGuardianRole': 'Primary Guardian',
          'primaryGuardianFullName': 'PrimaryGuardian Full Name',
          'primaryGuardianCellPhone': 'Primary Guardian Cell Phone',
          'primaryGuardianEmail': 'Primary Guardian Email',
          'primaryGuardianProfession': 'Primary Guardian Profession',
          'backupGuardianRole': 'Backup Guardian',
          'backupGuardianFullName': 'Backup Guardian Full Name',
          'backupGuardianCellPhone': 'Backup Guardian Cell Phone',
          'backupGuardianEmail': 'Backup Guardian Email',
          'backupGuardianProfession': 'Backup Guardian Profession',
          'students': 'Students',
          'payments': 'Payments',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'primaryGuardianRole': {
            'Father': 'Father',
            'Mother': 'Mother',
            'Sister': 'Sister',
            'Brother': 'Brother',
            'Uncle': 'Uncle',
            'Aunt': 'Aunt',
            'Grandfather': 'Grandfather',
            'Grandmother': 'Grandmother',
            'Other': 'Other',
          },
          'backupGuardianRole': {
            'Father': 'Father',
            'Mother': 'Mother',
            'Sister': 'Sister',
            'Brother': 'Brother',
            'Uncle': 'Uncle',
            'Aunt': 'Aunt',
            'Grandfather': 'Grandfather',
            'Grandmother': 'Grandmother',
            'Other': 'Other',
          },
        },
        new: {
          title: 'New Household',
        },
        view: {
          title: 'View Household',
        },
        importer: {
          title: 'Import Households',
          fileName: 'household_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    staff: {
        name: 'staff',
        label: 'Staff',
        menu: 'Staff',
        exporterFileName: 'staff_export',
        list: {
          menu: 'Staff',
          title: 'Staff',
        },
        create: {
          success: 'Staff successfully saved',
        },
        update: {
          success: 'Staff successfully saved',
        },
        destroy: {
          success: 'Staff successfully deleted',
        },
        destroyAll: {
          success: 'Staff(s) successfully deleted',
        },
        edit: {
          title: 'Edit Staff',
        },
        fields: {
          id: 'Id',
          'user': 'User',
          'school': 'School',
          'prefix': 'Prefix',
          'firstName': 'First Name',
          'middleName': 'Middle Name',
          'lastName': 'Last Name',
          'fullName': 'Full Name',
          'role': 'Role',
          'subject': 'Subject',
          'dateOfBirthRange': 'Date Of Birth',
          'dateOfBirth': 'Date Of Birth',
          'gender': 'Gender',
          'maritalStatus': 'MaritalStatus',
          'email': 'Email',
          'cellPhone': 'Cell Phone',
          'alternatePhone': 'Alternate Phone',
          'address': 'Address',
          'dateOfJoiningRange': 'Date Of Joining',
          'dateOfJoining': 'Date Of Joining',
          'dateOfTerminationRange': 'Date Of Termination',
          'dateOfTermination': 'Date Of Termination',
          'educationalQualifications': 'EducationalQualifications',
          'priorExperience': 'PriorExperience',
          'monthlySalaryRange': 'Monthly Salary',
          'monthlySalary': 'Monthly Salary',
          'picture': 'Picture',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'prefix': {
            'Mr': 'Mr',
            'Mrs': 'Mrs',
            'Ms': 'Ms',
            'Dr': 'Dr',
          },
          'role': {
            'Principal': 'Principal',
            'VicePrincipal': 'VicePrincipal',
            'Secretary': 'Secretary',
            'Librarian': 'Librarian',
            'Accountant': 'Accountant',
            'Nurse': 'Nurse',
            'Teacher': 'Teacher',
            'Admin': 'Admin',
            'CleaningStaff': 'CleaningStaff',
            'Councillor': 'Councillor',
            'Other': 'Other',
          },
          'gender': {
            'Male': 'Male',
            'Female': 'Female',
          },
          'maritalStatus': {
            'Single': 'Single',
            'Married': 'Married',
            'Divorced': 'Divorced',
            'Widowed': 'Widowed',
            'Spinster': 'Spinster',
          },
          'educationalQualifications': {
            'HighSchool': 'HighSchool',
            'Matriculate': 'Matriculate',
            'Diploma': 'Diploma',
            'BEd': 'BEd',
            'DegreeCollege': 'DegreeCollege',
            'PostGraduate': 'PostGraduate',
            'Other': 'Other',
          },
        },
        new: {
          title: 'New Staff',
        },
        view: {
          title: 'View Staff',
        },
        importer: {
          title: 'Import Staff',
          fileName: 'staff_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    section: {
        name: 'section',
        label: 'Sections',
        menu: 'Sections',
        exporterFileName: 'section_export',
        list: {
          menu: 'Sections',
          title: 'Sections',
        },
        create: {
          success: 'Section successfully saved',
        },
        update: {
          success: 'Section successfully saved',
        },
        destroy: {
          success: 'Section successfully deleted',
        },
        destroyAll: {
          success: 'Section(s) successfully deleted',
        },
        edit: {
          title: 'Edit Section',
        },
        fields: {
          id: 'Id',
          'school': 'School',
          'grade': 'Grade',
          'sectionName': 'SectionName',
          'enrollments': 'Enrollments',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'grade': {
            'Nursery': 'Nursery',
            'Pre_KG': 'Pre_KG',
            'KG': 'KG',
            'Class_I': 'Class_I',
            'Class_2': 'Class_2',
            'Class_3': 'Class_3',
            'Class_4': 'Class_4',
            'Class_5': 'Class_5',
            'Class_6': 'Class_6',
            'Class_7': 'Class_7',
            'Class_8': 'Class_8',
            'Class_9': 'Class_9',
            'Class_10': 'Class_10',
            'Class_11': 'Class_11',
            'Class_12': 'Class_12',
            'Evening': 'Evening',
            'Computer': 'Computer',
          },
        },
        new: {
          title: 'New Section',
        },
        view: {
          title: 'View Section',
        },
        importer: {
          title: 'Import Sections',
          fileName: 'section_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    course: {
        name: 'course',
        label: 'Courses',
        menu: 'Courses',
        exporterFileName: 'course_export',
        list: {
          menu: 'Courses',
          title: 'Courses',
        },
        create: {
          success: 'Course successfully saved',
        },
        update: {
          success: 'Course successfully saved',
        },
        destroy: {
          success: 'Course successfully deleted',
        },
        destroyAll: {
          success: 'Course(s) successfully deleted',
        },
        edit: {
          title: 'Edit Course',
        },
        fields: {
          id: 'Id',
          'school': 'School',
          'section': 'Section',
          'subject': 'Subject',
          'teacher': 'Teacher',
          'schoolYear': 'School Year',
          'courseName': 'Course Name',
          'assignments': 'Assignments',
          'examinations': 'Examinations',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'schoolYear': {
            'Yr_2020_21': 'Yr_2020_21',
            'Yr_2019_20': 'Yr_2019_20',
            'Yr_2018_19': 'Yr_2018_19',
            'Yr_2017_18': 'Yr_2017_18',
            'Yr_2016_17': 'Yr_2016_17',
            'Yr_2015_16': 'Yr_2015_16',
            'Yr_2021_2022': 'Yr_2021_2022',
            'Yr_2022_2023': 'Yr_2022_2023',
          },
        },
        new: {
          title: 'New Course',
        },
        view: {
          title: 'View Course',
        },
        importer: {
          title: 'Import Courses',
          fileName: 'course_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    assignment: {
        name: 'assignment',
        label: 'Assignments',
        menu: 'Assignments',
        exporterFileName: 'assignment_export',
        list: {
          menu: 'Assignments',
          title: 'Assignments',
        },
        create: {
          success: 'Assignment successfully saved',
        },
        update: {
          success: 'Assignment successfully saved',
        },
        destroy: {
          success: 'Assignment successfully deleted',
        },
        destroyAll: {
          success: 'Assignment(s) successfully deleted',
        },
        edit: {
          title: 'Edit Assignment',
        },
        fields: {
          id: 'Id',
          'course': 'Course',
          'dueDateRange': 'Due Date',
          'dueDate': 'Due Date',
          'name': 'Assignment Name',
          'homeworkLink': 'Homework Link',
          'category': 'Category',
          'maxScoreRange': 'Max Score',
          'maxScore': 'Max Score',
          'weightRange': 'Weight',
          'weight': 'Weight',
          'results': 'Results',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'category': {
            'Homework': 'Homework',
            'Project': 'Project',
            'Classwork': 'Classwork',
            'Assessment': 'Assessment',
            'Labs': 'Labs',
          },
        },
        new: {
          title: 'New Assignment',
        },
        view: {
          title: 'View Assignment',
        },
        importer: {
          title: 'Import Assignments',
          fileName: 'assignment_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    examination: {
        name: 'examination',
        label: 'Examinations',
        menu: 'Examinations',
        exporterFileName: 'examination_export',
        list: {
          menu: 'Examinations',
          title: 'Examinations',
        },
        create: {
          success: 'Examination successfully saved',
        },
        update: {
          success: 'Examination successfully saved',
        },
        destroy: {
          success: 'Examination successfully deleted',
        },
        destroyAll: {
          success: 'Examination(s) successfully deleted',
        },
        edit: {
          title: 'Edit Examination',
        },
        fields: {
          id: 'Id',
          'course': 'Course',
          'category': 'Category',
          'examDateRange': 'Exam Date',
          'examDate': 'Exam Date',
          'weightRange': 'Weight',
          'weight': 'Weight',
          'maxScoreRange': 'MaxScore',
          'maxScore': 'MaxScore',
          'name': 'Name',
          'results': 'Results',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'category': {
            'Weekly': 'Weekly',
            'Bimonthly': 'Bimonthly',
            'Monthly': 'Monthly',
            'Quarterly': 'Quarterly',
            'HalfYearly': 'HalfYearly',
            'Final': 'Final',
          },
        },
        new: {
          title: 'New Examination',
        },
        view: {
          title: 'View Examination',
        },
        importer: {
          title: 'Import Examinations',
          fileName: 'examination_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    subject: {
        name: 'subject',
        label: 'Subjects',
        menu: 'Subjects',
        exporterFileName: 'subject_export',
        list: {
          menu: 'Subjects',
          title: 'Subjects',
        },
        create: {
          success: 'Subject successfully saved',
        },
        update: {
          success: 'Subject successfully saved',
        },
        destroy: {
          success: 'Subject successfully deleted',
        },
        destroyAll: {
          success: 'Subject(s) successfully deleted',
        },
        edit: {
          title: 'Edit Subject',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'teachers': 'Teachers',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Subject',
        },
        view: {
          title: 'View Subject',
        },
        importer: {
          title: 'Import Subjects',
          fileName: 'subject_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    assignmentResult: {
        name: 'assignmentResult',
        label: 'AssignmentResults',
        menu: 'AssignmentResults',
        exporterFileName: 'assignmentResult_export',
        list: {
          menu: 'AssignmentResults',
          title: 'AssignmentResults',
        },
        create: {
          success: 'Assignment Result successfully saved',
        },
        update: {
          success: 'Assignment Result successfully saved',
        },
        destroy: {
          success: 'Assignment Result successfully deleted',
        },
        destroyAll: {
          success: 'Assignment Result(s) successfully deleted',
        },
        edit: {
          title: 'Edit Assignment Result',
        },
        fields: {
          id: 'Id',
          'assignment': 'Assignment',
          'student': 'Student',
          'submissionDateRange': 'Submission Date',
          'submissionDate': 'Submission Date',
          'scoreRange': 'Score',
          'score': 'Score',
          'grade': 'Grade',
          'teacherNotes': 'Teacher Notes',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'grade': {
            'A': 'A',
            'B': 'B',
            'C': 'C',
            'D': 'D',
            'E': 'E',
            'F': 'F',
          },
        },
        new: {
          title: 'New Assignment Result',
        },
        view: {
          title: 'View Assignment Result',
        },
        importer: {
          title: 'Import AssignmentResults',
          fileName: 'assignmentResult_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    examResult: {
        name: 'examResult',
        label: 'ExamResults',
        menu: 'ExamResults',
        exporterFileName: 'examResult_export',
        list: {
          menu: 'ExamResults',
          title: 'ExamResults',
        },
        create: {
          success: 'Exam Result successfully saved',
        },
        update: {
          success: 'Exam Result successfully saved',
        },
        destroy: {
          success: 'Exam Result successfully deleted',
        },
        destroyAll: {
          success: 'Exam Result(s) successfully deleted',
        },
        edit: {
          title: 'Edit Exam Result',
        },
        fields: {
          id: 'Id',
          'exam': 'Exam',
          'student': 'Student',
          'scoreRange': 'Score',
          'score': 'Score',
          'grade': 'Grade',
          'teacherNotes': 'Teacher Notes',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'grade': {
            'A': 'A',
            'B': 'B',
            'C': 'C',
            'D': 'D',
            'E': 'E',
            'F': 'F',
          },
        },
        new: {
          title: 'New Exam Result',
        },
        view: {
          title: 'View Exam Result',
        },
        importer: {
          title: 'Import ExamResults',
          fileName: 'examResult_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    reportCard: {
        name: 'reportCard',
        label: 'ReportCards',
        menu: 'ReportCards',
        exporterFileName: 'reportCard_export',
        list: {
          menu: 'ReportCards',
          title: 'ReportCards',
        },
        create: {
          success: 'Report Card successfully saved',
        },
        update: {
          success: 'Report Card successfully saved',
        },
        destroy: {
          success: 'Report Card successfully deleted',
        },
        destroyAll: {
          success: 'Report Card(s) successfully deleted',
        },
        edit: {
          title: 'Edit Report Card',
        },
        fields: {
          id: 'Id',
          'student': 'Student',
          'reportDateRange': 'Report Date',
          'reportDate': 'Report Date',
          'category': 'Category',
          'reportCardAttachment': 'Report Card Attachment',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'category': {
            'HalfYearly': 'HalfYearly',
            'Quarterly': 'Quarterly',
            'Final': 'Final',
            'Monthly': 'Monthly',
            'SchoolFinal': 'SchoolFinal',
            'Madhyamik': 'Madhyamik',
            'ICSE': 'ICSE',
            'UchhaMadhyamik': 'UchhaMadhyamik',
            'CBSE': 'CBSE',
            'Class_12': 'Class_12',
            'Other': 'Other',
          },
        },
        new: {
          title: 'New Report Card',
        },
        view: {
          title: 'View Report Card',
        },
        importer: {
          title: 'Import ReportCards',
          fileName: 'reportCard_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    studentDoc: {
        name: 'studentDoc',
        label: 'Student Documents',
        menu: 'Student Documents',
        exporterFileName: 'studentDoc_export',
        list: {
          menu: 'Student Documents',
          title: 'Student Documents',
        },
        create: {
          success: 'Student Document successfully saved',
        },
        update: {
          success: 'Student Document successfully saved',
        },
        destroy: {
          success: 'Student Document successfully deleted',
        },
        destroyAll: {
          success: 'Student Document(s) successfully deleted',
        },
        edit: {
          title: 'Edit Student Document',
        },
        fields: {
          id: 'Id',
          'student': 'Student',
          'docAttachment': 'Doc Attachment',
          'docName': 'Document Name',
          'comment': 'Comment',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Student Document',
        },
        view: {
          title: 'View Student Document',
        },
        importer: {
          title: 'Import Student Documents',
          fileName: 'studentDoc_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    studentAttendance: {
        name: 'studentAttendance',
        label: 'Student Attendance',
        menu: 'Student Attendance',
        exporterFileName: 'studentAttendance_export',
        list: {
          menu: 'Student Attendance',
          title: 'Student Attendance',
        },
        create: {
          success: 'Student Attendance successfully saved',
        },
        update: {
          success: 'Student Attendance successfully saved',
        },
        destroy: {
          success: 'Student Attendance successfully deleted',
        },
        destroyAll: {
          success: 'Student Attendance(s) successfully deleted',
        },
        edit: {
          title: 'Edit Student Attendance',
        },
        fields: {
          id: 'Id',
          'student': 'Student',
          'schoolDateRange': 'School Date',
          'schoolDate': 'School Date',
          'attended': 'Attended',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Student Attendance',
        },
        view: {
          title: 'View Student Attendance',
        },
        importer: {
          title: 'Import Student Attendance',
          fileName: 'studentAttendance_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    staffAttendance: {
        name: 'staffAttendance',
        label: 'StaffAttendances',
        menu: 'StaffAttendances',
        exporterFileName: 'staffAttendance_export',
        list: {
          menu: 'StaffAttendances',
          title: 'StaffAttendances',
        },
        create: {
          success: 'Staff Attendance successfully saved',
        },
        update: {
          success: 'Staff Attendance successfully saved',
        },
        destroy: {
          success: 'Staff Attendance successfully deleted',
        },
        destroyAll: {
          success: 'Staff Attendance(s) successfully deleted',
        },
        edit: {
          title: 'Edit Staff Attendance',
        },
        fields: {
          id: 'Id',
          'staff': 'Staff',
          'schoolDateRange': 'School Date',
          'schoolDate': 'School Date',
          'hasWorked': 'Has Worked',
          'startTimeRange': 'StartTime',
          'startTime': 'StartTime',
          'endTimeRange': 'EndTime',
          'endTime': 'EndTime',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Staff Attendance',
        },
        view: {
          title: 'View Staff Attendance',
        },
        importer: {
          title: 'Import StaffAttendances',
          fileName: 'staffAttendance_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    studentPayment: {
        name: 'studentPayment',
        label: 'Student Payments',
        menu: 'Student Payments',
        exporterFileName: 'studentPayment_export',
        list: {
          menu: 'Student Payments',
          title: 'Student Payments',
        },
        create: {
          success: 'Student Payment successfully saved',
        },
        update: {
          success: 'Student Payment successfully saved',
        },
        destroy: {
          success: 'Student Payment successfully deleted',
        },
        destroyAll: {
          success: 'Student Payment(s) successfully deleted',
        },
        edit: {
          title: 'Edit Student Payment',
        },
        fields: {
          id: 'Id',
          'household': 'Household',
          'student': 'Student',
          'paymentDateRange': 'Payment Date',
          'paymentDate': 'Payment Date',
          'paymentAmountRange': 'Payment Amount',
          'paymentAmount': 'Payment Amount',
          'paymentType': 'PaymentType',
          'feeMonths': 'FeeMonths',
          'paymentNotes': 'Payment Notes',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'paymentType': {
            'Check': 'Check',
            'Cash': 'Cash',
            'PayTM': 'PayTM',
            'CreditCard': 'CreditCard',
            'Other': 'Other',
          },
        },
        new: {
          title: 'New Student Payment',
        },
        view: {
          title: 'View Student Payment',
        },
        importer: {
          title: 'Import Student Payments',
          fileName: 'studentPayment_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    enrollment: {
        name: 'enrollment',
        label: 'Enrollments',
        menu: 'Enrollments',
        exporterFileName: 'enrollment_export',
        list: {
          menu: 'Enrollments',
          title: 'Enrollments',
        },
        create: {
          success: 'Enrollment successfully saved',
        },
        update: {
          success: 'Enrollment successfully saved',
        },
        destroy: {
          success: 'Enrollment successfully deleted',
        },
        destroyAll: {
          success: 'Enrollment(s) successfully deleted',
        },
        edit: {
          title: 'Edit Enrollment',
        },
        fields: {
          id: 'Id',
          'student': 'Student',
          'section': 'Section',
          'academicYear': 'Academic Year',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'academicYear': {
            '_2020': '_2020',
            '_2021': '_2021',
            '_2022': '_2022',
            '_2023': '_2023',
          },
        },
        new: {
          title: 'New Enrollment',
        },
        view: {
          title: 'View Enrollment',
        },
        importer: {
          title: 'Import Enrollments',
          fileName: 'enrollment_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    sponsor: {
        name: 'sponsor',
        label: 'Sponsors',
        menu: 'Sponsors',
        exporterFileName: 'sponsor_export',
        list: {
          menu: 'Sponsors',
          title: 'Sponsors',
        },
        create: {
          success: 'Sponsor successfully saved',
        },
        update: {
          success: 'Sponsor successfully saved',
        },
        destroy: {
          success: 'Sponsor successfully deleted',
        },
        destroyAll: {
          success: 'Sponsor(s) successfully deleted',
        },
        edit: {
          title: 'Edit Sponsor',
        },
        fields: {
          id: 'Id',
          'firstName': 'First Name',
          'lastName': 'Last Name',
          'fullName': 'Full Name',
          'students': 'Students',
          'startDateRange': 'Start Date',
          'startDate': 'Start Date',
          'endDateRange': 'End Date',
          'endDate': 'End Date',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Sponsor',
        },
        view: {
          title: 'View Sponsor',
        },
        importer: {
          title: 'Import Sponsors',
          fileName: 'sponsor_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    sponsorPayment: {
        name: 'sponsorPayment',
        label: 'SponsorPayments',
        menu: 'SponsorPayments',
        exporterFileName: 'sponsorPayment_export',
        list: {
          menu: 'SponsorPayments',
          title: 'SponsorPayments',
        },
        create: {
          success: 'SponsorPayment successfully saved',
        },
        update: {
          success: 'SponsorPayment successfully saved',
        },
        destroy: {
          success: 'SponsorPayment successfully deleted',
        },
        destroyAll: {
          success: 'SponsorPayment(s) successfully deleted',
        },
        edit: {
          title: 'Edit SponsorPayment',
        },
        fields: {
          id: 'Id',
          'sponsor': 'Sponsor',
          'student': 'Student',
          'paymentDateRange': 'Payment Date',
          'paymentDate': 'Payment Date',
          'paymentAmountRange': 'Payment Amount',
          'paymentAmount': 'Payment Amount',
          'paymentType': 'Payment Type',
          'feeMonths': 'Fee Months',
          'paymentNotes': 'Payment Notes',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'paymentType': {
            'Check': 'Check',
            'Cash': 'Cash',
            'CreditCard': 'CreditCard',
            'NetBanking': 'NetBanking',
          },
        },
        new: {
          title: 'New SponsorPayment',
        },
        view: {
          title: 'View SponsorPayment',
        },
        importer: {
          title: 'Import SponsorPayments',
          fileName: 'sponsorPayment_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    tenants: 'NGOs',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    teacher: {
      label: 'Teacher',
      description: 'Access to tests and assignments',
    },
    schooladmin: {
      label: 'School Administration',
      description: 'Access to all school related resources',
    },
    accounting: {
      label: 'Accounting',
      description: 'Access to payments and donor info',
    },
    donor: { 
      label: 'Donor Access',
      description: 'Read only access to student info',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom role access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'NGOs',
    menu: 'NGOs',
    list: {
      menu: 'NGOs',
      title: 'NGOs',
    },
    create: {
      button: 'Create NGO',
      success: 'NGO successfully saved',
    },
    update: {
      success: 'NGO successfully saved',
    },
    destroy: {
      success: 'NGO successfully deleted',
    },
    destroyAll: {
      success: 'NGO(s) successfully deleted',
    },
    edit: {
      title: 'Edit NGO',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'NGO Name',
      tenantId: 'NGO',
      tenantUrl: 'NGO URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New NGO',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select NGO',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      primary: 'Primary Color',
      secondary: 'Secondary Color',
      logos: 'Logo',
      backgroundImages: 'Background Images',
      shade: 'Shade',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} of {2}',
    labelRowsPerPage: 'Per page:',
  },
};

export default en;
