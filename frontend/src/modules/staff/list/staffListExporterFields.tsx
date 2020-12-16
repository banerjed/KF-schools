import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.staff.fields.id'),
  },
  {
    name: 'user',
    label: i18n('entities.staff.fields.user'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'school',
    label: i18n('entities.staff.fields.school'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'prefix',
    label: i18n('entities.staff.fields.prefix'),
  },
  {
    name: 'firstName',
    label: i18n('entities.staff.fields.firstName'),
  },
  {
    name: 'middleName',
    label: i18n('entities.staff.fields.middleName'),
  },
  {
    name: 'lastName',
    label: i18n('entities.staff.fields.lastName'),
  },
  {
    name: 'fullName',
    label: i18n('entities.staff.fields.fullName'),
  },
  {
    name: 'role',
    label: i18n('entities.staff.fields.role'),
  },
  {
    name: 'subject',
    label: i18n('entities.staff.fields.subject'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'dateOfBirth',
    label: i18n('entities.staff.fields.dateOfBirth'),
  },
  {
    name: 'gender',
    label: i18n('entities.staff.fields.gender'),
  },
  {
    name: 'maritalStatus',
    label: i18n('entities.staff.fields.maritalStatus'),
  },
  {
    name: 'email',
    label: i18n('entities.staff.fields.email'),
  },
  {
    name: 'cellPhone',
    label: i18n('entities.staff.fields.cellPhone'),
  },
  {
    name: 'alternatePhone',
    label: i18n('entities.staff.fields.alternatePhone'),
  },
  {
    name: 'address',
    label: i18n('entities.staff.fields.address'),
  },
  {
    name: 'dateOfJoining',
    label: i18n('entities.staff.fields.dateOfJoining'),
  },
  {
    name: 'dateOfTermination',
    label: i18n('entities.staff.fields.dateOfTermination'),
  },
  {
    name: 'educationalQualifications',
    label: i18n('entities.staff.fields.educationalQualifications'),
  },
  {
    name: 'priorExperience',
    label: i18n('entities.staff.fields.priorExperience'),
  },
  {
    name: 'monthlySalary',
    label: i18n('entities.staff.fields.monthlySalary'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'picture',
    label: i18n('entities.staff.fields.picture'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.staff.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.staff.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
