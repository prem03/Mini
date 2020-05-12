import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Container,Row,Col} from 'reactstrap';
import {Link} from 'react-router-dom';

class SportsCard extends Component {
    constructor(props) {
      super(props);
    }
    render () {
    
       
    return (
        <Container fluid>
            <Row className="Row-1">
                <Col >
                <div>
                <Link to="/cricket">
                    <Card style={{ width: '20rem' }} >
                        <CardImg  src=" https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvSjB-RFiTmQXS3WaCIu4IWCgiFAVsoJYvqwq27-wUJ-fV82HX&usqp=CAU" alt="Card image cap" height="200" width="200"/>
                        <CardBody>
                        <CardTitle>Cricket</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText>Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 20-metre (22-yard) pitch with a wicket at each end, each comprising two bails balanced on three stumps.</CardText>
                        </CardBody>
                    </Card>
                </Link>
                </div>
                </Col>
                
                <Col >
                <div>
                <Link to="/football">
                    <Card style={{ width: '20rem' }}>
                        <CardImg src="https://cdn4.vectorstock.com/i/1000x1000/90/13/empty-football-field-arena-stadium-vector-21269013.jpg" alt="Card image cap" width= "200" height= "200" />
                        <CardBody>
                        <CardTitle>Football</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText>Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal.There are a number of references to traditional, ancient, or prehistoric ball games played in many different parts of the world. </CardText>
                        {/* <Button color="danger" onClick={() => this.props.removeSports(id)}>Delete</Button> */}
                        </CardBody>
                    </Card>
                    </Link>
                </div>
                </Col>
                
                <Col>
                <div>
                <Link to="/basketball">
                    <Card style={{ width: '20rem' }}>
                        <CardImg src="https://cdn2.vectorstock.com/i/1000x1000/51/76/basketball-spotlight-field-concept-background-vector-21305176.jpg" alt="Card image cap" height="200" width="200" />
                        <CardBody>
                        <CardTitle>Basketball</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText>Basketball is a team sport in which two teams of five players each, compete with the primary objective of shooting a basketball through the defender's hoop  while preventing the opposing team from shooting through their own hoop.</CardText>
                        {/* <Button color="danger" onClick={() => this.props.removeSports(id)}>Delete</Button> */}
                        </CardBody>
                    </Card>
                    </Link>
                </div>
                </Col>
                <Col>
                <div>
                <a style={{ cursor: 'pointer' }} onClick="#">
                    <Card style={{ width: '20rem' }}>
                        <CardImg  src="https://img.freepik.com/free-photo/flag-commonwealth-nations_1401-286.jpg?size=626&ext=jpg" alt="Card image cap" height="200" width="200"/>
                        <CardBody>
                        <CardTitle>CommonWealth</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText>A commonwealth is a traditional English term for a political community founded for the common good.  The noun "commonwealth", meaning "public welfare general good or advantage", dates from the 15th century. </CardText>
                        {/* <Button color="danger" onClick={() => this.props.removeSports(id)}>Delete</Button> */}
                        </CardBody>
                    </Card>
                    </a>
                </div>
                </Col>
                
            
            </Row>
            
        </Container>
    )
      
    }
  }
  
  export default SportsCard;