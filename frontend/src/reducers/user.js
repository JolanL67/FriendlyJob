import { SAVE_RANDOM_JOBWORKER, CHANGE_FIELD, SAVE_USER, SAVE_SIX_RANDOM_JOBWORKER } from "../action/usersActions";

const initialState = {
  // ici l'état initial
  /** contenu du champ e-mail */
  email: '',
  /** contenu du champ password */
  password: '',
  /** indique si l'utilisateur est loggué */
  isLogged: false,
  /** informations de l'utilisateur */
  userData: null,
  /** Token  */
  token: '',
  randomJobWorker: null,
  loading: true,
  jobWorkerList: [],
  sixJobWorker: [],
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RANDOM_JOBWORKER:
      return {
        ...state,
        randomJobWorker: action.newRandomJobWorker,
        loading: false,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.inputName]: action.newValue,
      };
    case SAVE_USER:
      return {
        ...state,
        isLogged: action.isLogged,
        userData: action.info,
      };
    case SAVE_SIX_RANDOM_JOBWORKER:
      return {
        ...state,
        sixJobWorker: action.sixJobWorker,
      };
    default: return state;
  }
};

export default userReducer;
