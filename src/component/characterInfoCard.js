import React from 'react';
import { Card, ListGroup, Button, Badge } from "react-bootstrap";

const characterInfo = (props) => {
  console.log("props",props);
  return (
    <Card style={{ width: '26rem' }}>
      <Card.Img variant="top" style={{width:'50%', marginLeft:'25%'}} src={props?.characterDetailData?.sprites?.other?.home?.front_default} />

      <Card.Body>
        <Card.Title>{props?.characterDetailData?.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Abilities : {' '}
          {props?.characterDetailData?.abilities.map((abilityData) => {
            return (
              <Badge bg="primary" className='me-2'>{abilityData?.ability?.name}</Badge>
            )
          })}
        </ListGroup.Item>
        <ListGroup.Item>Stats : {' '}
          {props?.characterDetailData?.stats.map((statsData) => {
            return (
              <Badge bg="success" className='me-2'>{statsData?.stat?.name}</Badge>
            )
          })}
        </ListGroup.Item>
        <ListGroup.Item>Held Items : {' '}
          {props?.characterDetailData?.held_items.map((heldItemsData) => {
            return (
              <Badge bg="info" className='me-2'>{heldItemsData?.item?.name}</Badge>
            )
          })}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}
export default characterInfo;


