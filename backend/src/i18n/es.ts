const es = {
  app: {
    title: 'Aplicación',
  },
  auth: {
    userNotFound:
      'Lo sentimos, no reconocemos tus credenciales',
    wrongPassword:
      'Lo sentimos, no reconocemos tus credenciales',
    weakPassword: 'Esta contraseña es muy débil.',
    emailAlreadyInUse: 'Correo electrónico ya está en uso',
    invalidEmail:
      'Por favor proporcione un correo electrónico válido',
    passwordReset: {
      invalidToken:
        'El enlace de restablecimiento de contraseña no es válido o ha expirado',
      error: 'Correo electrónico no reconocido',
    },
    emailAddressVerificationEmail: {
      invalidToken:
        'El enlace de verificación de correo electrónico no es válido o ha expirado.',
      error: 'Correo electrónico no reconocido',
      signedInAsWrongUser:
        'Esta confirmación por correo electrónico se envió a {0} pero ha iniciado sesión como {1}.',
    },
    passwordChange: {
      invalidPassword:
        'La contraseña anterior no es válida.',
    },
  },
  user: {
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe.',
      userNotFound: 'Usuario no encontrado.',
      destroyingHimself: 'No puedes eliminarte a ti mismo.',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador.',
      revokingPlanUser:
        'No puede revocar el permiso de administrador del administrador del plan.',
      destroyingPlanUser:
        'No puede eliminar el administrador del plan.',
    },
  },
  tenant: {
    exists:
      'Ya hay un espacio de trabajo en esta aplicación.',
    url: {
      exists:
        'Esta URL del espacio de trabajo ya está en uso.',
    },
    invitation: {
      notSameEmail:
        'Esta invitación se envió a {0} pero has iniciado sesión como {1}.',
    },
    planActive:
      'Hay un plan activo para este espacio de trabajo. Por favor, cancele el plan primero.',
    stripeNotConfigured: 'Stripe no está configurado.',
  },
  importer: {
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
  errors: {
    notFound: {
      message: 'Extraviado',
    },
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
  },
  email: {
    error:
      'El proveedor de correo electrónico no está configurado.',
  },
  preview: {
    error:
      'Lo sentimos, esta operación no está permitida en el modo de vista previa.',
  },

  entities: {
    school: {
      errors: {
        unique: {
          name: 'Name debe ser único',
        }
      }
    },
    student: {
      errors: {
        unique: {
          rollNumber: 'RollNumber debe ser único',
        }
      }
    },
    household: {
      errors: {
        unique: {

        }
      }
    },
    staff: {
      errors: {
        unique: {

        }
      }
    },
    section: {
      errors: {
        unique: {
          sectionName: 'SectionName debe ser único',
        }
      }
    },
    course: {
      errors: {
        unique: {
          courseName: 'Course Name debe ser único',
        }
      }
    },
    assignment: {
      errors: {
        unique: {

        }
      }
    },
    examination: {
      errors: {
        unique: {

        }
      }
    },
    subject: {
      errors: {
        unique: {
          name: 'Name debe ser único',
        }
      }
    },
    assignmentResult: {
      errors: {
        unique: {

        }
      }
    },
    examResult: {
      errors: {
        unique: {

        }
      }
    },
    reportCard: {
      errors: {
        unique: {

        }
      }
    },
    studentDoc: {
      errors: {
        unique: {

        }
      }
    },
    studentAttendance: {
      errors: {
        unique: {

        }
      }
    },
    staffAttendance: {
      errors: {
        unique: {

        }
      }
    },
    studentPayment: {
      errors: {
        unique: {

        }
      }
    },
    enrollment: {
      errors: {
        unique: {

        }
      }
    },
    sponsor: {
      errors: {
        unique: {

        }
      }
    },
    sponsorPayment: {
      errors: {
        unique: {

        }
      }
    },
  }
};

export default es;
