import React from 'react';
import { Card } from 'semantic-ui-react';


// == Composant
const RequestFinish = ({ request }) => (
  <Card className="request_Card">
    <Card.Content className="request_Content">
      <div className="request_LeftSide">
        <Card.Header>{request.friendlyUser.firstname}</Card.Header>
        <Card.Meta>{request.service.title}</Card.Meta>
      </div>
      <div className="request_MiddleSide">
        <div className="date">{request.reservationDate}</div>
        <div className="hour">{request.reservationHour}</div>
      </div>
      <div className="request_RightSide">
        <Card.Description>
          {request.body}
        </Card.Description>
      </div>
    </Card.Content>
    <div className="request_Status">{request.status}</div>
    <Card.Content extra>
      <div className="finish_texte">
        Merci pour votre service , le FriendlyUser vous laissera peut etre un avis sur votre profil. A bientot.
      </div>
    </Card.Content>
  </Card>
);
export default RequestFinish;
