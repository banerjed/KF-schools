import list from 'src/modules/staffAttendance/list/staffAttendanceListReducers';
import form from 'src/modules/staffAttendance/form/staffAttendanceFormReducers';
import view from 'src/modules/staffAttendance/view/staffAttendanceViewReducers';
import destroy from 'src/modules/staffAttendance/destroy/staffAttendanceDestroyReducers';
import importerReducer from 'src/modules/staffAttendance/importer/staffAttendanceImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
