// == Import Library
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

// == Import Style
import './presentation.scss';

// == Import Utils
import { slugifyTitle } from 'src/utils';

// component presentation in homepage
const Presentation = ({ serviceList, fieldService, serviceSelected }) => {

  const history = useHistory();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    history.push(`/services/${serviceSelected}`);
  };

  const handleChange = (serviceSelected) => {
    fieldService(slugifyTitle(serviceSelected.value));
  };

  const handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      history.push(`/services/${serviceSelected}`);
    }
  };

  const falseSet = false;

  return (
    <div className="presentation">
      <h2 className="presentation_title">FriendlyJob oui ! Mais pourquoi faire ?</h2>
      <p className="presentation_content">Vous avez besoin d'un jardinier, d'un informaticien ou bien de faire garder votre enfant ? Friendlyjob et des centaines de JobWorker sont là pour vous. C'est très simple, trouver un service qui correspond à vos attentes, selectionner le JobWorkers de votre choix et reservez !
      </p>
      <div className="presentation_input">
        <form onSubmit={handleSubmit} action="">
          <Select
            blurInputOnSelect={falseSet}
            name="serviceInput"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Selectionne un service"
            options={serviceList.map((service) => ({
              key: service.id,
              value: service.title,
              label: service.title,
            }))}
            // value={serviceSelected}
            isSearchable={falseSet}
            onInputChange="input-change"
            controlShouldRenderValue
          />
          <button type="submit" value="ok">ok</button>
        </form>
      </div>
    </div>
  );
};

Presentation.propTypes = {
  serviceSelected: PropTypes.string.isRequired,
  /** Func with param */
  fieldService: PropTypes.func.isRequired,
  serviceList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Presentation;
