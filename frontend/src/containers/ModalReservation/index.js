import { connect } from 'react-redux';
import {
  changeFieldRequest,
  submitRequest,
  changeFieldHourRequest,
  changeFieldDateRequest,
  displayHour,
} from 'src/action/requestAction';
import ModalReservation from '../../components/ModalReservation';
import { openSuccesMessage, closeSuccesMessage } from '../../action/usersActions';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  currentJobWorkerDetail: state.user.currentJobWorkerDetail,
  requestDate: state.request.requestDate,
  requestHour: state.request.requestHour,
  hour: state.request.hour,
  isSave: state.request.isSave,
  isOpen: state.user.isOpen,
  errorMessageReservation: state.request.errorMessageReservation,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  changeFieldRequest: (newValue, inputName) => {
    dispatch(changeFieldRequest(newValue, inputName));
  },
  submitRequest: () => {
    dispatch(submitRequest());
  },
  changeFieldHourRequest: (newHour) => {
    dispatch(changeFieldHourRequest(newHour));
  },
  changeFieldDateRequest: (newDate) => {
    dispatch(changeFieldDateRequest(newDate));
  },
  displayHour: (initialHour) => {
    dispatch(displayHour(initialHour));
  },
  openSuccessMessage: () => {
    dispatch(openSuccesMessage());
  },
  closeSuccessMessage: () => {
    dispatch(closeSuccesMessage());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalReservation);
