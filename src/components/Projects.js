import React from "react"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Container
} from 'reactstrap';
import dingBatCard from './../assets/dingBatCard.png';
import mariosReview from './../assets/mariosReview.png';
import toshou from './../assets/toshou.png';

function Projects(props) {
  return (
    <Container>
    <h1>Projects</h1>
    <div className ="cards">
    <row>
      <Col md="13">
      <Card>
        <CardBody>
        <CardTitle><h2>DingBat</h2></CardTitle>
        <CardSubtitle><strong>Ruby on Rails  Action Cable  PostGreSql</strong></CardSubtitle>
        <CardImg top width="100%" img src={dingBatCard} alt="Card image cap" />
          <CardText>A browser based party trivia game based off the "JackBox" series on Nintendo Switch. Players can sign in to a game via mobile devices. Host device is ideally a monitor or T.V.</CardText>
          <Button href="http://dingbat-trivia.herokuapp.com">Visit Page</Button>
        </CardBody>
      </Card>
      </Col>
      </row>
      <row>
        <Col md="14">
        <Card>
          <CardBody>
          <CardTitle><h2>Marios Reviews</h2></CardTitle>
          <CardSubtitle><strong>Ruby on Rails  PostgreSql  Devise</strong></CardSubtitle>
          <CardImg top width="100%" img src={mariosReview} alt="Card image cap" />
            <CardText>A full stack application, mock up site with authorizations through Devise. Users can sign up, and add a product to the site and leave a review.</CardText>
            <Button href="https://fierce-lake-38166.herokuapp.com/users/sign_in">Visit Page</Button>
          </CardBody>
        </Card>
        </Col>
        </row>
        <row>
          <Col md="13">
          <Card>
            <CardBody>
            <CardTitle><h2>Toshou</h2></CardTitle>
            <CardSubtitle><strong>MERN Stack  Redux  BcryptJS</strong></CardSubtitle>
            <CardImg top width="100%" img src={toshou} alt="Card image cap" />
              <CardText>Online book tracking site allowing the user to create reading goals, reviews and wish list of books. Private routing coming soon.</CardText>
              <Button>Visit Page</Button>
            </CardBody>
          </Card>
          </Col>
          </row>
    </div>
  </Container>
  )
}

export default Projects;
