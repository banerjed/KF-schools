import list from 'src/modules/studentAttendance/list/studentAttendanceListReducers';
import form from 'src/modules/studentAttendance/form/studentAttendanceFormReducers';
import view from 'src/modules/studentAttendance/view/studentAttendanceViewReducers';
import destroy from 'src/modules/studentAttendance/destroy/studentAttendanceDestroyReducers';
import importerReducer from 'src/modules/studentAttendance/importer/studentAttendanceImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
