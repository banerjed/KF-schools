import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.student.fields.id'),
  },
  {
    name: 'picture',
    label: i18n('entities.student.fields.picture'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'rollNumber',
    label: i18n('entities.student.fields.rollNumber'),
  },
  {
    name: 'firstName',
    label: i18n('entities.student.fields.firstName'),
  },
  {
    name: 'middleName',
    label: i18n('entities.student.fields.middleName'),
  },
  {
    name: 'lastName',
    label: i18n('entities.student.fields.lastName'),
  },
  {
    name: 'fullName',
    label: i18n('entities.student.fields.fullName'),
  },
  {
    name: 'school',
    label: i18n('entities.student.fields.school'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'gender',
    label: i18n('entities.student.fields.gender'),
  },
  {
    name: 'dateOfBirth',
    label: i18n('entities.student.fields.dateOfBirth'),
  },
  {
    name: 'dateOfJoin',
    label: i18n('entities.student.fields.dateOfJoin'),
  },
  {
    name: 'household',
    label: i18n('entities.student.fields.household'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'enrollments',
    label: i18n('entities.student.fields.enrollments'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'payments',
    label: i18n('entities.student.fields.payments'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'currentSection',
    label: i18n('entities.student.fields.currentSection'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'needsSponsorship',
    label: i18n('entities.student.fields.needsSponsorship'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'aboutStudent',
    label: i18n('entities.student.fields.aboutStudent'),
  },
  {
    name: 'currentSponsor',
    label: i18n('entities.student.fields.currentSponsor'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.student.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.student.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
