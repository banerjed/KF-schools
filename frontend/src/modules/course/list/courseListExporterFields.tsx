import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.course.fields.id'),
  },
  {
    name: 'school',
    label: i18n('entities.course.fields.school'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'section',
    label: i18n('entities.course.fields.section'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'subject',
    label: i18n('entities.course.fields.subject'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'teacher',
    label: i18n('entities.course.fields.teacher'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'schoolYear',
    label: i18n('entities.course.fields.schoolYear'),
  },
  {
    name: 'courseName',
    label: i18n('entities.course.fields.courseName'),
  },
  {
    name: 'assignments',
    label: i18n('entities.course.fields.assignments'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'examinations',
    label: i18n('entities.course.fields.examinations'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.course.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.course.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
