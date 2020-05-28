import React from 'react';
import ModalInscription from 'src/containers/ModalInscription';
import Jober from './Jober';
import './jobpresentation.scss';


// component for jobworker presentation in homepage

const JobPresentation = () => (

  <div className="jobpresentation">
    <div className="jobpresentation_title">
      <h2>Comme Thibault deviens un super jobWorker</h2>
    </div>
    <div className="jobpresentation_card">
      <div className="jobercard">
        <Jober />
      </div>
    </div>
    <div className="jobpresentation_content">
      <p> Vous avez une passion ou une compètence que vous souhaitez exercer de manière plus assidu et rémunerée ?
        Alors inscris-toi et deviens le jobWorker préféré de tes voisins !
      </p>
    </div>
    <div>
      <ModalInscription />
    </div>
  </div>
);

export default JobPresentation;
