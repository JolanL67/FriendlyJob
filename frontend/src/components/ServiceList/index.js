// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './serviceList.scss';

// == Composant
const ServiceList = ({ serviceList }) => (
  <div className="serviceList">
    <div className="serviceList_presentation">
      Cliquez sur le service de votre choix pour avoir un appercu
      des JobWorkers present dans votre region.
    </div>
    <div className="serviceList_wrap">
      {serviceList.map((service) => (
        <Link className="serviceList_link" to="/services/detail">
          <div className="serviceList_box">
            <img className="serviceList_Card_img" src={service.image} alt="profil's" />
            <div className="serviceList_Card_title">{service.title}</div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

ServiceList.propTypes = {
  serviceList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};


// == Export
export default ServiceList;
