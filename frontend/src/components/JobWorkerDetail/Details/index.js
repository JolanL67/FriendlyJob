import React from 'react';

import './details.scss';
import NavButtonStyled from '../../Button/NavButtonStyled';
import ModalReservation from '../../ModalReservation';
import JoberService from '../../ServiceDetail/JoberService';

const Details = () => (

  <div className="detail">
    <div className="detail_title">
      <h2>Détail de NomDuJobWorker</h2>
    </div>
    <div className="detail_content">
      <div className="detail_content_card">
        <JoberService />
      </div>
      <div className="detail_content_about">
        <div className="detail_content_about-title">
          <h3>A propos</h3>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quam quibusdam, et saepe ratione illum sequi in sed perspiciatis temporibus odio reprehenderit? Aliquid itaque molestias corrupti veritatis nesciunt rem asperiores incidunt a minus odit pariatur ducimus possimus cum veniam minima iste fuga, est reprehenderit voluptas recusandae quia doloremque!</p>
      </div>
    </div>
    <div className="detail_reservation">
      <ModalReservation />
    </div>
  </div>

);


export default Details;
