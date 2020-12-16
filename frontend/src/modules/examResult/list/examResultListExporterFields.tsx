import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.examResult.fields.id'),
  },
  {
    name: 'student',
    label: i18n('entities.examResult.fields.student'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'exam',
    label: i18n('entities.examResult.fields.exam'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'score',
    label: i18n('entities.examResult.fields.score'),
  },
  {
    name: 'grade',
    label: i18n('entities.examResult.fields.grade'),
  },
  {
    name: 'teacherNotes',
    label: i18n('entities.examResult.fields.teacherNotes'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.examResult.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.examResult.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
