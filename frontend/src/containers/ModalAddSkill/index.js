import { connect } from 'react-redux';
import {getNewSkillValue, submitNewSkill } from 'src/action/usersActions';
import ModalAddSkill from 'src/components/ModalAddSkill';


const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  serviceList: state.service.serviceList,
  selectedSkillPrice: state.user.selectedSkillPrice,
  selectedSkillDescription: state.user.selectedSkillDescription,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getNewSkillValue: (skillValue, nameInput) => {
    dispatch(getNewSkillValue(skillValue, nameInput));
  },
  submitNewSkill: () => {
    dispatch(submitNewSkill());
  },
});


export default connect(

  mapStateToProps,
  mapDispatchToProps,

)(ModalAddSkill);
