import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.assignmentResult.fields.id'),
  },
  {
    name: 'assignment',
    label: i18n('entities.assignmentResult.fields.assignment'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'student',
    label: i18n('entities.assignmentResult.fields.student'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'submissionDate',
    label: i18n('entities.assignmentResult.fields.submissionDate'),
  },
  {
    name: 'score',
    label: i18n('entities.assignmentResult.fields.score'),
  },
  {
    name: 'grade',
    label: i18n('entities.assignmentResult.fields.grade'),
  },
  {
    name: 'teacherNotes',
    label: i18n('entities.assignmentResult.fields.teacherNotes'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.assignmentResult.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.assignmentResult.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
