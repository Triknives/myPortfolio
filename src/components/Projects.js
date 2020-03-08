import React from "react"
import Thumbnail from './Thumbnail.js';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import dingBatCard from './../assets/dingBatCard.png';
import mariosReview1 from './../assets/mariosReview1.png';
import toshou from './../assets/toshou.png';

function Projects(props) {
  return (
    <div>
    <h1>Projects</h1>
    <div className ="cards">
    <row>
      <Col sm="13">
      <Card>
        <CardBody>
        <CardImg top width="100%" img src={dingBatCard} alt="Card image cap" />
          <CardTitle>DingBat</CardTitle>
          <CardSubtitle>Ruby Full Stack Application</CardSubtitle>
          <CardText>A browser based party trivia game based off the "JackBox" series on Nintendo Switch. Players can sign in to a game via mobile devices. Host device is ideally a monitor or T.V.</CardText>
          <Button href="http://dingbat-trivia.herokuapp.com">Visit Page</Button>
        </CardBody>
      </Card>
      </Col>
      </row>
      <row>
        <Col sm="14">
        <Card>
          <CardBody>
          <CardImg top width="100%" img src={mariosReview1} alt="Card image cap" />
            <CardTitle>DingBat</CardTitle>
            <CardSubtitle>Ruby Full Stack Application</CardSubtitle>
            <CardText>A browser based party trivia game based off the "JackBox" series on Nintendo Switch. Players can sign in to a game via mobile devices. Hosaat</CardText>
            <Button href="https://fierce-lake-38166.herokuapp.com/users/sign_in">Visit Page</Button>
          </CardBody>
        </Card>
        </Col>
        </row>
        <row>
          <Col sm="13">
          <Card>
            <CardBody>
            <CardImg top width="100%" img src={toshou} alt="Card image cap" />
              <CardTitle>DingBat</CardTitle>
              <CardSubtitle>Ruby Full Stack Application</CardSubtitle>
              <CardText>A browser based party trivia game based off the "JackBox" series on Nintendo Switch. Players can sign in to a game via mobasssss</CardText>
              <Button>Visit Page</Button>
            </CardBody>
          </Card>
          </Col>
          </row>
    </div>
  </div>
  )
}

export default Projects;
