const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    start: 'Comienzo',
    end: 'Final',
    select: 'Seleccione',
    continue: 'Continúa',
    filters: 'Filtros',
  },
  app: {
    title: 'Aplicación',
  },
  entities: {
    school: {
        name: 'school',
        label: 'Schools',
        menu: 'Schools',
        exporterFileName: 'exportacion_school',
        list: {
          menu: 'Schools',
          title: 'Schools',
        },
        create: {
          success: 'School guardado con éxito',
        },
        update: {
          success: 'School guardado con éxito',
        },
        destroy: {
          success: 'School eliminado con éxito',
        },
        destroyAll: {
          success: 'School(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar School',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo School',
        },
        view: {
          title: 'Ver School',
        },
        importer: {
          title: 'Importar Schools',
          fileName: 'school_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    student: {
        name: 'student',
        label: 'Students',
        menu: 'Students',
        exporterFileName: 'exportacion_student',
        list: {
          menu: 'Students',
          title: 'Students',
        },
        create: {
          success: 'Student guardado con éxito',
        },
        update: {
          success: 'Student guardado con éxito',
        },
        destroy: {
          success: 'Student eliminado con éxito',
        },
        destroyAll: {
          success: 'Student(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Student',
        },
        fields: {
          id: 'Id',
          'picture': 'Picture',
          'rollNumber': 'RollNumber',
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
          'household': 'Household',
          'enrollments': 'Enrollments',
          'payments': 'Payments',
          'currentSection': 'Current Section',
          'needsSponsorship': 'Needs Sponsorship',
          'aboutStudent': 'About Student',
          'currentSponsor': 'Current Sponsor',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'gender': {
            'Boy': 'Boy',
            'Girl': 'Girl',
          },
        },
        new: {
          title: 'Nuevo Student',
        },
        view: {
          title: 'Ver Student',
        },
        importer: {
          title: 'Importar Students',
          fileName: 'student_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    household: {
        name: 'household',
        label: 'Households',
        menu: 'Households',
        exporterFileName: 'exportacion_household',
        list: {
          menu: 'Households',
          title: 'Households',
        },
        create: {
          success: 'Household guardado con éxito',
        },
        update: {
          success: 'Household guardado con éxito',
        },
        destroy: {
          success: 'Household eliminado con éxito',
        },
        destroyAll: {
          success: 'Household(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Household',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Household',
        },
        view: {
          title: 'Ver Household',
        },
        importer: {
          title: 'Importar Households',
          fileName: 'household_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    staff: {
        name: 'staff',
        label: 'Staff',
        menu: 'Staff',
        exporterFileName: 'exportacion_staff',
        list: {
          menu: 'Staff',
          title: 'Staff',
        },
        create: {
          success: 'Staff guardado con éxito',
        },
        update: {
          success: 'Staff guardado con éxito',
        },
        destroy: {
          success: 'Staff eliminado con éxito',
        },
        destroyAll: {
          success: 'Staff(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Staff',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Staff',
        },
        view: {
          title: 'Ver Staff',
        },
        importer: {
          title: 'Importar Staff',
          fileName: 'staff_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    section: {
        name: 'section',
        label: 'Sections',
        menu: 'Sections',
        exporterFileName: 'exportacion_section',
        list: {
          menu: 'Sections',
          title: 'Sections',
        },
        create: {
          success: 'Section guardado con éxito',
        },
        update: {
          success: 'Section guardado con éxito',
        },
        destroy: {
          success: 'Section eliminado con éxito',
        },
        destroyAll: {
          success: 'Section(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Section',
        },
        fields: {
          id: 'Id',
          'school': 'School',
          'grade': 'Grade',
          'sectionName': 'SectionName',
          'enrollments': 'Enrollments',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Section',
        },
        view: {
          title: 'Ver Section',
        },
        importer: {
          title: 'Importar Sections',
          fileName: 'section_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    course: {
        name: 'course',
        label: 'Courses',
        menu: 'Courses',
        exporterFileName: 'exportacion_course',
        list: {
          menu: 'Courses',
          title: 'Courses',
        },
        create: {
          success: 'Course guardado con éxito',
        },
        update: {
          success: 'Course guardado con éxito',
        },
        destroy: {
          success: 'Course eliminado con éxito',
        },
        destroyAll: {
          success: 'Course(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Course',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Course',
        },
        view: {
          title: 'Ver Course',
        },
        importer: {
          title: 'Importar Courses',
          fileName: 'course_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    assignment: {
        name: 'assignment',
        label: 'Assignments',
        menu: 'Assignments',
        exporterFileName: 'exportacion_assignment',
        list: {
          menu: 'Assignments',
          title: 'Assignments',
        },
        create: {
          success: 'Assignment guardado con éxito',
        },
        update: {
          success: 'Assignment guardado con éxito',
        },
        destroy: {
          success: 'Assignment eliminado con éxito',
        },
        destroyAll: {
          success: 'Assignment(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Assignment',
        },
        fields: {
          id: 'Id',
          'course': 'Course',
          'category': 'Category',
          'dueDateRange': 'Due Date',
          'dueDate': 'Due Date',
          'name': 'Assignment Name',
          'homeworkLink': 'Homework Link',
          'maxScoreRange': 'Max Score',
          'maxScore': 'Max Score',
          'weightRange': 'Weight',
          'weight': 'Weight',
          'results': 'Results',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'category': {
            'Homework': 'Homework',
            'Project': 'Project',
            'Classwork': 'Classwork',
            'Assessment': 'Assessment',
            'Labs': 'Labs',
            'Other': 'Other',
          },
        },
        new: {
          title: 'Nuevo Assignment',
        },
        view: {
          title: 'Ver Assignment',
        },
        importer: {
          title: 'Importar Assignments',
          fileName: 'assignment_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    examination: {
        name: 'examination',
        label: 'Examinations',
        menu: 'Examinations',
        exporterFileName: 'exportacion_examination',
        list: {
          menu: 'Examinations',
          title: 'Examinations',
        },
        create: {
          success: 'Examination guardado con éxito',
        },
        update: {
          success: 'Examination guardado con éxito',
        },
        destroy: {
          success: 'Examination eliminado con éxito',
        },
        destroyAll: {
          success: 'Examination(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Examination',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Examination',
        },
        view: {
          title: 'Ver Examination',
        },
        importer: {
          title: 'Importar Examinations',
          fileName: 'examination_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    subject: {
        name: 'subject',
        label: 'Subjects',
        menu: 'Subjects',
        exporterFileName: 'exportacion_subject',
        list: {
          menu: 'Subjects',
          title: 'Subjects',
        },
        create: {
          success: 'Subject guardado con éxito',
        },
        update: {
          success: 'Subject guardado con éxito',
        },
        destroy: {
          success: 'Subject eliminado con éxito',
        },
        destroyAll: {
          success: 'Subject(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Subject',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'teachers': 'Teachers',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Subject',
        },
        view: {
          title: 'Ver Subject',
        },
        importer: {
          title: 'Importar Subjects',
          fileName: 'subject_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    assignmentResult: {
        name: 'assignmentResult',
        label: 'AssignmentResults',
        menu: 'AssignmentResults',
        exporterFileName: 'exportacion_assignmentResult',
        list: {
          menu: 'AssignmentResults',
          title: 'AssignmentResults',
        },
        create: {
          success: 'Assignment Result guardado con éxito',
        },
        update: {
          success: 'Assignment Result guardado con éxito',
        },
        destroy: {
          success: 'Assignment Result eliminado con éxito',
        },
        destroyAll: {
          success: 'Assignment Result(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Assignment Result',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Assignment Result',
        },
        view: {
          title: 'Ver Assignment Result',
        },
        importer: {
          title: 'Importar AssignmentResults',
          fileName: 'assignmentResult_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    examResult: {
        name: 'examResult',
        label: 'ExamResults',
        menu: 'ExamResults',
        exporterFileName: 'exportacion_examResult',
        list: {
          menu: 'ExamResults',
          title: 'ExamResults',
        },
        create: {
          success: 'Exam Result guardado con éxito',
        },
        update: {
          success: 'Exam Result guardado con éxito',
        },
        destroy: {
          success: 'Exam Result eliminado con éxito',
        },
        destroyAll: {
          success: 'Exam Result(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Exam Result',
        },
        fields: {
          id: 'Id',
          'student': 'Student',
          'exam': 'Exam',
          'scoreRange': 'Score',
          'score': 'Score',
          'grade': 'Grade',
          'teacherNotes': 'Teacher Notes',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Exam Result',
        },
        view: {
          title: 'Ver Exam Result',
        },
        importer: {
          title: 'Importar ExamResults',
          fileName: 'examResult_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    reportCard: {
        name: 'reportCard',
        label: 'ReportCards',
        menu: 'ReportCards',
        exporterFileName: 'exportacion_reportCard',
        list: {
          menu: 'ReportCards',
          title: 'ReportCards',
        },
        create: {
          success: 'Report Card guardado con éxito',
        },
        update: {
          success: 'Report Card guardado con éxito',
        },
        destroy: {
          success: 'Report Card eliminado con éxito',
        },
        destroyAll: {
          success: 'Report Card(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Report Card',
        },
        fields: {
          id: 'Id',
          'student': 'Student',
          'reportDateRange': 'Report Date',
          'reportDate': 'Report Date',
          'category': 'Category',
          'reportCardAttachment': 'Report Card Attachment',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Report Card',
        },
        view: {
          title: 'Ver Report Card',
        },
        importer: {
          title: 'Importar ReportCards',
          fileName: 'reportCard_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    studentDoc: {
        name: 'studentDoc',
        label: 'Student Documents',
        menu: 'Student Documents',
        exporterFileName: 'exportacion_studentDoc',
        list: {
          menu: 'Student Documents',
          title: 'Student Documents',
        },
        create: {
          success: 'Student Document guardado con éxito',
        },
        update: {
          success: 'Student Document guardado con éxito',
        },
        destroy: {
          success: 'Student Document eliminado con éxito',
        },
        destroyAll: {
          success: 'Student Document(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Student Document',
        },
        fields: {
          id: 'Id',
          'student': 'Student',
          'docAttachment': 'Doc Attachment',
          'docName': 'Document Name',
          'comment': 'Comment',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Student Document',
        },
        view: {
          title: 'Ver Student Document',
        },
        importer: {
          title: 'Importar Student Documents',
          fileName: 'studentDoc_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    studentAttendance: {
        name: 'studentAttendance',
        label: 'Student Attendance',
        menu: 'Student Attendance',
        exporterFileName: 'exportacion_studentAttendance',
        list: {
          menu: 'Student Attendance',
          title: 'Student Attendance',
        },
        create: {
          success: 'Student Attendance guardado con éxito',
        },
        update: {
          success: 'Student Attendance guardado con éxito',
        },
        destroy: {
          success: 'Student Attendance eliminado con éxito',
        },
        destroyAll: {
          success: 'Student Attendance(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Student Attendance',
        },
        fields: {
          id: 'Id',
          'student': 'Student',
          'schoolDateRange': 'School Date',
          'schoolDate': 'School Date',
          'attended': 'Attended',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Student Attendance',
        },
        view: {
          title: 'Ver Student Attendance',
        },
        importer: {
          title: 'Importar Student Attendance',
          fileName: 'studentAttendance_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    staffAttendance: {
        name: 'staffAttendance',
        label: 'StaffAttendances',
        menu: 'StaffAttendances',
        exporterFileName: 'exportacion_staffAttendance',
        list: {
          menu: 'StaffAttendances',
          title: 'StaffAttendances',
        },
        create: {
          success: 'Staff Attendance guardado con éxito',
        },
        update: {
          success: 'Staff Attendance guardado con éxito',
        },
        destroy: {
          success: 'Staff Attendance eliminado con éxito',
        },
        destroyAll: {
          success: 'Staff Attendance(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Staff Attendance',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Staff Attendance',
        },
        view: {
          title: 'Ver Staff Attendance',
        },
        importer: {
          title: 'Importar StaffAttendances',
          fileName: 'staffAttendance_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    studentPayment: {
        name: 'studentPayment',
        label: 'Student Payments',
        menu: 'Student Payments',
        exporterFileName: 'exportacion_studentPayment',
        list: {
          menu: 'Student Payments',
          title: 'Student Payments',
        },
        create: {
          success: 'Student Payment guardado con éxito',
        },
        update: {
          success: 'Student Payment guardado con éxito',
        },
        destroy: {
          success: 'Student Payment eliminado con éxito',
        },
        destroyAll: {
          success: 'Student Payment(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Student Payment',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Student Payment',
        },
        view: {
          title: 'Ver Student Payment',
        },
        importer: {
          title: 'Importar Student Payments',
          fileName: 'studentPayment_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    enrollment: {
        name: 'enrollment',
        label: 'Enrollments',
        menu: 'Enrollments',
        exporterFileName: 'exportacion_enrollment',
        list: {
          menu: 'Enrollments',
          title: 'Enrollments',
        },
        create: {
          success: 'Enrollment guardado con éxito',
        },
        update: {
          success: 'Enrollment guardado con éxito',
        },
        destroy: {
          success: 'Enrollment eliminado con éxito',
        },
        destroyAll: {
          success: 'Enrollment(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Enrollment',
        },
        fields: {
          id: 'Id',
          'student': 'Student',
          'section': 'Section',
          'academicYear': 'Academic Year',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Enrollment',
        },
        view: {
          title: 'Ver Enrollment',
        },
        importer: {
          title: 'Importar Enrollments',
          fileName: 'enrollment_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    sponsor: {
        name: 'sponsor',
        label: 'Sponsors',
        menu: 'Sponsors',
        exporterFileName: 'exportacion_sponsor',
        list: {
          menu: 'Sponsors',
          title: 'Sponsors',
        },
        create: {
          success: 'Sponsor guardado con éxito',
        },
        update: {
          success: 'Sponsor guardado con éxito',
        },
        destroy: {
          success: 'Sponsor eliminado con éxito',
        },
        destroyAll: {
          success: 'Sponsor(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Sponsor',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Sponsor',
        },
        view: {
          title: 'Ver Sponsor',
        },
        importer: {
          title: 'Importar Sponsors',
          fileName: 'sponsor_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    sponsorPayment: {
        name: 'sponsorPayment',
        label: 'SponsorPayments',
        menu: 'SponsorPayments',
        exporterFileName: 'exportacion_sponsorPayment',
        list: {
          menu: 'SponsorPayments',
          title: 'SponsorPayments',
        },
        create: {
          success: 'SponsorPayment guardado con éxito',
        },
        update: {
          success: 'SponsorPayment guardado con éxito',
        },
        destroy: {
          success: 'SponsorPayment eliminado con éxito',
        },
        destroyAll: {
          success: 'SponsorPayment(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar SponsorPayment',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo SponsorPayment',
        },
        view: {
          title: 'Ver SponsorPayment',
        },
        importer: {
          title: 'Importar SponsorPayments',
          fileName: 'sponsorPayment_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },
  },
  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    createAnAccount: 'Crea una cuenta',
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url:
        'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },
  roles: {
    admin: {
      label: 'Administración',
      description: 'Acceso total a todos los recursos.',
    },
    custom: {
      label: 'Rol personalizado',
      description: 'Acceso personalizado a recursos',
    },
  },
  user: {
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      role: 'Rol',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint:
        'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratis',
      price: '$0',
    },
    growth: {
      label: 'Crecimiento',
      price: '$10',
    },
    enterprise: {
      label: 'Empresa',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      primary: 'Color primario',
      secondary: 'Color secundario',
      logos: 'Logo',
      backgroundImages: 'Imágenes de fondo',
      shade: 'Sombra',
    },
  },
  dashboard: {
    menu: 'Tablero',
    message:
      'Esta página utiliza datos falsos solo con fines de demostración. Puede editarlo en frontend/view/dashboard/DashboardPage.ts.',
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429':
      'Demasiadas solicitudes. Por favor, inténtelo de nuevo más tarde.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max:
        '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min:
        'El campo ${path} debe tener al menos ${min} elementos',
      max:
        'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size:
      'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint:
        'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },

  autocomplete: {
    loading: 'Cargando...',
    noOptions: 'Datos no encontrados',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
  table: {
    noData: 'No se encontraron registros',
    loading: 'Cargando...',
  },
  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default es;
