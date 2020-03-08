import React from "react"
import Thumbnail from './Thumbnail.js';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import dingBatCard from './../assets/dingBatCard.png';
import mariosReview1 from './../assets/mariosReview1.png';

function Projects(props) {
  return (
    <div className ="cards">
    <row>
      <Col sm="15">
      <Card>
        <CardBody>
        <CardImg top width="100%" img src={dingBatCard} alt="Card image cap" />
          <CardTitle>DingBat</CardTitle>
          <CardSubtitle>Ruby Full Stack Application</CardSubtitle>
          <CardText>A browser based party trivia game based off the "JackBox" series on Nintendo Switch. Players can sign in to a game via mobile devices. Host device is ideally a monitor or T.V.</CardText>
          <Button href="https://fierce-lake-38166.herokuapp.com/users/sign_in">Visit Page</Button>
        </CardBody>
      </Card>
      </Col>
      </row>
      <row>
        <Col sm="15">
        <Card>
          <CardBody>
          <CardImg top width="100%" img src={mariosReview1} alt="Card image cap" />
            <CardTitle>DingBat</CardTitle>
            <CardSubtitle>Ruby Full Stack Application</CardSubtitle>
            <CardText>A browser based party trivia game based off the "JackBox" series on Nintendo Switch. Players can sign in to a game via mobile devices. Host</CardText>
            <Button>Visit Page</Button>
          </CardBody>
        </Card>
        </Col>
        </row>
        <row>
          <Col sm="15">
          <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle>DingBat</CardTitle>
              <CardSubtitle>Ruby Full Stack Application</CardSubtitle>
              <CardText>A browser based party trivia game based off the "JackBox" series on Nintendo Switch. Players can sign in to a game via mobile devices. Host device is ideally a monitor or T.V.</CardText>
              <Button>Visit Page</Button>
            </CardBody>
          </Card>
          </Col>
          </row>
    </div>
  )
}

export default Projects;
