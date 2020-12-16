import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import assignmentEnumerators from 'src/modules/assignment/assignmentEnumerators';

export default [
  {
    name: 'course',
    label: i18n('entities.assignment.fields.course'),
    schema: schemas.relationToOne(
      i18n('entities.assignment.fields.course'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'category',
    label: i18n('entities.assignment.fields.category'),
    schema: schemas.enumerator(
      i18n('entities.assignment.fields.category'),
      {
        "options": assignmentEnumerators.category
      },
    ),
  },
  {
    name: 'dueDate',
    label: i18n('entities.assignment.fields.dueDate'),
    schema: schemas.date(
      i18n('entities.assignment.fields.dueDate'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'name',
    label: i18n('entities.assignment.fields.name'),
    schema: schemas.string(
      i18n('entities.assignment.fields.name'),
      {
        "required": true,
        "max": 255
      },
    ),
  },
  {
    name: 'homeworkLink',
    label: i18n('entities.assignment.fields.homeworkLink'),
    schema: schemas.string(
      i18n('entities.assignment.fields.homeworkLink'),
      {
        "max": 255
      },
    ),
  },
  {
    name: 'maxScore',
    label: i18n('entities.assignment.fields.maxScore'),
    schema: schemas.integer(
      i18n('entities.assignment.fields.maxScore'),
      {},
    ),
  },
  {
    name: 'weight',
    label: i18n('entities.assignment.fields.weight'),
    schema: schemas.integer(
      i18n('entities.assignment.fields.weight'),
      {
        "max": 100
      },
    ),
  },
  {
    name: 'results',
    label: i18n('entities.assignment.fields.results'),
    schema: schemas.relationToMany(
      i18n('entities.assignment.fields.results'),
      {},
    ),
  },
];