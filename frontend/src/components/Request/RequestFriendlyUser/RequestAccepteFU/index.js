import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import { changeHourFormat, changeDateFormat } from 'src/utils';


// == Composant
const RequestAccepteFU = ({ request, submitFinishRequest, getCommentId}) => {
  const hourResevation = new Date(request.reservationHour);
  const dateReservation = new Date(request.reservationDate);

  const handleClick = () => {
    getCommentId(request.id);
    submitFinishRequest();
    console.log('clickclick');
  };

  return (
    <Card className="request_Card_accepte">
      <Card.Content className="request_Content">
        <div className="request_LeftSide">
          <Card.Header>{request.jobWorker.firstname}</Card.Header>
          <Card.Meta>{request.service.title}</Card.Meta>
        </div>
        <div className="request_MiddleSide">
          <div className="date">{changeDateFormat(dateReservation)}</div>
          <div className="hour">{changeHourFormat(hourResevation)}</div>
        </div>
        <div className="request_RightSide">
          <Card.Description>
            {request.body}
          </Card.Description>
        </div>
      </Card.Content>
      <div className="request_Status">{request.status}</div>
      <Card.Content extra>
        <div className="buttons">
          <Button className="approve_Button">
            Contacter le JW
          </Button>
          <Button className="decline_Button" disabled>
            Annuler
          </Button>
          <Button onClick={handleClick} className="finishing_Button">
            Service Terminé
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};
export default RequestAccepteFU;
