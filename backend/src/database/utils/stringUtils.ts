
export default class StringUtils {
  static buildFullName(firstName, middleName, lastName) {
    if (!firstName && !lastName) {
      return null;
    }

    if (middleName) {
      return `${this.trimString(firstName)} ${this.trimString(middleName)} ${this.trimString(lastName)}`.trim();
    } else {
      return `${this.trimString(firstName)} ${this.trimString(lastName)}`.trim();
    }
  }

  static buildCourseName(teacher, section, subject) {
    return `${teacher.prefix}. ${teacher.fullName} (${subject.name}): ${section.sectionName}`.trim();
  }

  static trimString(str) {
    return  str ? str.trim() : '';
  }

}

