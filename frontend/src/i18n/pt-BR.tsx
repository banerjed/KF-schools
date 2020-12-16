const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
    select: 'Selecionar',
    continue: 'Continuar',
    filters: 'Filtros',
  },

  app: {
    title: 'Aplicação',
  },

  entities: {
    school: {
        name: 'School',
        label: 'Schools',
        menu: 'Schools',
        exporterFileName: 'School_exportados',
        list: {
          menu: 'Schools',
          title: 'Schools',
        },
        create: {
          success: 'School salvo com sucesso',
        },
        update: {
          success: 'School salvo com sucesso',
        },
        destroy: {
          success: 'School deletado com sucesso',
        },
        destroyAll: {
          success: 'School(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo School',
        },
        view: {
          title: 'Visualizar School',
        },
        importer: {
          title: 'Importar Schools',
          fileName: 'school_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    student: {
        name: 'Student',
        label: 'Students',
        menu: 'Students',
        exporterFileName: 'Student_exportados',
        list: {
          menu: 'Students',
          title: 'Students',
        },
        create: {
          success: 'Student salvo com sucesso',
        },
        update: {
          success: 'Student salvo com sucesso',
        },
        destroy: {
          success: 'Student deletado com sucesso',
        },
        destroyAll: {
          success: 'Student(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'gender': {
            'Boy': 'Boy',
            'Girl': 'Girl',
          },
        },
        new: {
          title: 'Novo Student',
        },
        view: {
          title: 'Visualizar Student',
        },
        importer: {
          title: 'Importar Students',
          fileName: 'student_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    household: {
        name: 'Household',
        label: 'Households',
        menu: 'Households',
        exporterFileName: 'Household_exportados',
        list: {
          menu: 'Households',
          title: 'Households',
        },
        create: {
          success: 'Household salvo com sucesso',
        },
        update: {
          success: 'Household salvo com sucesso',
        },
        destroy: {
          success: 'Household deletado com sucesso',
        },
        destroyAll: {
          success: 'Household(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Household',
        },
        view: {
          title: 'Visualizar Household',
        },
        importer: {
          title: 'Importar Households',
          fileName: 'household_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    staff: {
        name: 'Staff',
        label: 'Staff',
        menu: 'Staff',
        exporterFileName: 'Staff_exportados',
        list: {
          menu: 'Staff',
          title: 'Staff',
        },
        create: {
          success: 'Staff salvo com sucesso',
        },
        update: {
          success: 'Staff salvo com sucesso',
        },
        destroy: {
          success: 'Staff deletado com sucesso',
        },
        destroyAll: {
          success: 'Staff(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Staff',
        },
        view: {
          title: 'Visualizar Staff',
        },
        importer: {
          title: 'Importar Staff',
          fileName: 'staff_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    section: {
        name: 'Section',
        label: 'Sections',
        menu: 'Sections',
        exporterFileName: 'Section_exportados',
        list: {
          menu: 'Sections',
          title: 'Sections',
        },
        create: {
          success: 'Section salvo com sucesso',
        },
        update: {
          success: 'Section salvo com sucesso',
        },
        destroy: {
          success: 'Section deletado com sucesso',
        },
        destroyAll: {
          success: 'Section(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Section',
        },
        view: {
          title: 'Visualizar Section',
        },
        importer: {
          title: 'Importar Sections',
          fileName: 'section_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    course: {
        name: 'Course',
        label: 'Courses',
        menu: 'Courses',
        exporterFileName: 'Course_exportados',
        list: {
          menu: 'Courses',
          title: 'Courses',
        },
        create: {
          success: 'Course salvo com sucesso',
        },
        update: {
          success: 'Course salvo com sucesso',
        },
        destroy: {
          success: 'Course deletado com sucesso',
        },
        destroyAll: {
          success: 'Course(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Course',
        },
        view: {
          title: 'Visualizar Course',
        },
        importer: {
          title: 'Importar Courses',
          fileName: 'course_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    assignment: {
        name: 'Assignment',
        label: 'Assignments',
        menu: 'Assignments',
        exporterFileName: 'Assignment_exportados',
        list: {
          menu: 'Assignments',
          title: 'Assignments',
        },
        create: {
          success: 'Assignment salvo com sucesso',
        },
        update: {
          success: 'Assignment salvo com sucesso',
        },
        destroy: {
          success: 'Assignment deletado com sucesso',
        },
        destroyAll: {
          success: 'Assignment(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Assignment',
        },
        view: {
          title: 'Visualizar Assignment',
        },
        importer: {
          title: 'Importar Assignments',
          fileName: 'assignment_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    examination: {
        name: 'Examination',
        label: 'Examinations',
        menu: 'Examinations',
        exporterFileName: 'Examination_exportados',
        list: {
          menu: 'Examinations',
          title: 'Examinations',
        },
        create: {
          success: 'Examination salvo com sucesso',
        },
        update: {
          success: 'Examination salvo com sucesso',
        },
        destroy: {
          success: 'Examination deletado com sucesso',
        },
        destroyAll: {
          success: 'Examination(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Examination',
        },
        view: {
          title: 'Visualizar Examination',
        },
        importer: {
          title: 'Importar Examinations',
          fileName: 'examination_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    subject: {
        name: 'Subject',
        label: 'Subjects',
        menu: 'Subjects',
        exporterFileName: 'Subject_exportados',
        list: {
          menu: 'Subjects',
          title: 'Subjects',
        },
        create: {
          success: 'Subject salvo com sucesso',
        },
        update: {
          success: 'Subject salvo com sucesso',
        },
        destroy: {
          success: 'Subject deletado com sucesso',
        },
        destroyAll: {
          success: 'Subject(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Subject',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'teachers': 'Teachers',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Subject',
        },
        view: {
          title: 'Visualizar Subject',
        },
        importer: {
          title: 'Importar Subjects',
          fileName: 'subject_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    assignmentResult: {
        name: 'Assignment Result',
        label: 'AssignmentResults',
        menu: 'AssignmentResults',
        exporterFileName: 'Assignment Result_exportados',
        list: {
          menu: 'AssignmentResults',
          title: 'AssignmentResults',
        },
        create: {
          success: 'Assignment Result salvo com sucesso',
        },
        update: {
          success: 'Assignment Result salvo com sucesso',
        },
        destroy: {
          success: 'Assignment Result deletado com sucesso',
        },
        destroyAll: {
          success: 'Assignment Result(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Assignment Result',
        },
        view: {
          title: 'Visualizar Assignment Result',
        },
        importer: {
          title: 'Importar AssignmentResults',
          fileName: 'assignmentResult_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    examResult: {
        name: 'Exam Result',
        label: 'ExamResults',
        menu: 'ExamResults',
        exporterFileName: 'Exam Result_exportados',
        list: {
          menu: 'ExamResults',
          title: 'ExamResults',
        },
        create: {
          success: 'Exam Result salvo com sucesso',
        },
        update: {
          success: 'Exam Result salvo com sucesso',
        },
        destroy: {
          success: 'Exam Result deletado com sucesso',
        },
        destroyAll: {
          success: 'Exam Result(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Exam Result',
        },
        view: {
          title: 'Visualizar Exam Result',
        },
        importer: {
          title: 'Importar ExamResults',
          fileName: 'examResult_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    reportCard: {
        name: 'Report Card',
        label: 'ReportCards',
        menu: 'ReportCards',
        exporterFileName: 'Report Card_exportados',
        list: {
          menu: 'ReportCards',
          title: 'ReportCards',
        },
        create: {
          success: 'Report Card salvo com sucesso',
        },
        update: {
          success: 'Report Card salvo com sucesso',
        },
        destroy: {
          success: 'Report Card deletado com sucesso',
        },
        destroyAll: {
          success: 'Report Card(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Report Card',
        },
        view: {
          title: 'Visualizar Report Card',
        },
        importer: {
          title: 'Importar ReportCards',
          fileName: 'reportCard_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    studentDoc: {
        name: 'Student Document',
        label: 'Student Documents',
        menu: 'Student Documents',
        exporterFileName: 'Student Document_exportados',
        list: {
          menu: 'Student Documents',
          title: 'Student Documents',
        },
        create: {
          success: 'Student Document salvo com sucesso',
        },
        update: {
          success: 'Student Document salvo com sucesso',
        },
        destroy: {
          success: 'Student Document deletado com sucesso',
        },
        destroyAll: {
          success: 'Student Document(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Student Document',
        },
        view: {
          title: 'Visualizar Student Document',
        },
        importer: {
          title: 'Importar Student Documents',
          fileName: 'studentDoc_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    studentAttendance: {
        name: 'Student Attendance',
        label: 'Student Attendance',
        menu: 'Student Attendance',
        exporterFileName: 'Student Attendance_exportados',
        list: {
          menu: 'Student Attendance',
          title: 'Student Attendance',
        },
        create: {
          success: 'Student Attendance salvo com sucesso',
        },
        update: {
          success: 'Student Attendance salvo com sucesso',
        },
        destroy: {
          success: 'Student Attendance deletado com sucesso',
        },
        destroyAll: {
          success: 'Student Attendance(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Student Attendance',
        },
        view: {
          title: 'Visualizar Student Attendance',
        },
        importer: {
          title: 'Importar Student Attendance',
          fileName: 'studentAttendance_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    staffAttendance: {
        name: 'Staff Attendance',
        label: 'StaffAttendances',
        menu: 'StaffAttendances',
        exporterFileName: 'Staff Attendance_exportados',
        list: {
          menu: 'StaffAttendances',
          title: 'StaffAttendances',
        },
        create: {
          success: 'Staff Attendance salvo com sucesso',
        },
        update: {
          success: 'Staff Attendance salvo com sucesso',
        },
        destroy: {
          success: 'Staff Attendance deletado com sucesso',
        },
        destroyAll: {
          success: 'Staff Attendance(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Staff Attendance',
        },
        view: {
          title: 'Visualizar Staff Attendance',
        },
        importer: {
          title: 'Importar StaffAttendances',
          fileName: 'staffAttendance_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    studentPayment: {
        name: 'Student Payment',
        label: 'Student Payments',
        menu: 'Student Payments',
        exporterFileName: 'Student Payment_exportados',
        list: {
          menu: 'Student Payments',
          title: 'Student Payments',
        },
        create: {
          success: 'Student Payment salvo com sucesso',
        },
        update: {
          success: 'Student Payment salvo com sucesso',
        },
        destroy: {
          success: 'Student Payment deletado com sucesso',
        },
        destroyAll: {
          success: 'Student Payment(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Student Payment',
        },
        view: {
          title: 'Visualizar Student Payment',
        },
        importer: {
          title: 'Importar Student Payments',
          fileName: 'studentPayment_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    enrollment: {
        name: 'Enrollment',
        label: 'Enrollments',
        menu: 'Enrollments',
        exporterFileName: 'Enrollment_exportados',
        list: {
          menu: 'Enrollments',
          title: 'Enrollments',
        },
        create: {
          success: 'Enrollment salvo com sucesso',
        },
        update: {
          success: 'Enrollment salvo com sucesso',
        },
        destroy: {
          success: 'Enrollment deletado com sucesso',
        },
        destroyAll: {
          success: 'Enrollment(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Enrollment',
        },
        fields: {
          id: 'Id',
          'student': 'Student',
          'section': 'Section',
          'academicYear': 'Academic Year',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Enrollment',
        },
        view: {
          title: 'Visualizar Enrollment',
        },
        importer: {
          title: 'Importar Enrollments',
          fileName: 'enrollment_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    sponsor: {
        name: 'Sponsor',
        label: 'Sponsors',
        menu: 'Sponsors',
        exporterFileName: 'Sponsor_exportados',
        list: {
          menu: 'Sponsors',
          title: 'Sponsors',
        },
        create: {
          success: 'Sponsor salvo com sucesso',
        },
        update: {
          success: 'Sponsor salvo com sucesso',
        },
        destroy: {
          success: 'Sponsor deletado com sucesso',
        },
        destroyAll: {
          success: 'Sponsor(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Sponsor',
        },
        view: {
          title: 'Visualizar Sponsor',
        },
        importer: {
          title: 'Importar Sponsors',
          fileName: 'sponsor_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    sponsorPayment: {
        name: 'SponsorPayment',
        label: 'SponsorPayments',
        menu: 'SponsorPayments',
        exporterFileName: 'SponsorPayment_exportados',
        list: {
          menu: 'SponsorPayments',
          title: 'SponsorPayments',
        },
        create: {
          success: 'SponsorPayment salvo com sucesso',
        },
        update: {
          success: 'SponsorPayment salvo com sucesso',
        },
        destroy: {
          success: 'SponsorPayment deletado com sucesso',
        },
        destroyAll: {
          success: 'SponsorPayment(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo SponsorPayment',
        },
        view: {
          title: 'Visualizar SponsorPayment',
        },
        importer: {
          title: 'Importar SponsorPayments',
          fileName: 'sponsorPayment_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },
    
  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists: 'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
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

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success: 'Configurações salvas com sucesso.',
    },
    fields: {
      primary: 'Cor Primária',
      secondary: 'Cor Secundária',
      shade: 'Tom',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
  },
  dashboard: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: '${path} deve possuir ao menos ${min} itens',
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default ptBR;
