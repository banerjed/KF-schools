/**
 * List of Roles available for the Users.
 */
class Roles {
  static get values() {
    return {
      admin:        'admin',
      schooladmin:  'schooladmin',                                  
      teacher:      'teacher',                                      
      accounting:   'accounting',                                   
      donor:        'donor',                                        
      custom:       'custom',    
    };
  }
}

export default Roles;
