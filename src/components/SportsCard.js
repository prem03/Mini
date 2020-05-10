import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Container,Row,Col} from 'reactstrap';


class SportsCard extends Component {
    constructor(props) {
      super(props);
    }
    render () {
      
       
    return (
        <Container fluid>
            <Row>
                <Col>
                <div>
                    <Card>
                        <CardImg top width="100%" src="https://images.vexels.com/media/users/3/175833/isolated/preview/6d69d6660933b7ef9532963816103c58-cricket-king-bat-ball-badge-sticker-by-vexels.png" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>a</CardTitle>
                        <CardSubtitle>b</CardSubtitle>
                        <CardText>c</CardText>
                        {/* <Button color="danger" onClick={() => this.props.removeSports(id)}>Delete</Button> */}
                        </CardBody>
                    </Card>
                </div>
                </Col>
                
                <Col>
                <div>
                    <Card>
                        <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Football_%28soccer_ball%29.svg/450px-Football_%28soccer_ball%29.svg.png" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>a</CardTitle>
                        <CardSubtitle>b</CardSubtitle>
                        <CardText>c</CardText>
                        {/* <Button color="danger" onClick={() => this.props.removeSports(id)}>Delete</Button> */}
                        </CardBody>
                    </Card>
                </div>
                </Col>
                
                <Col>
                <div>
                    <Card>
                        <CardImg top width="100%" src="https://cdn.onlinewebfonts.com/svg/img_531497.png" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>a</CardTitle>
                        <CardSubtitle>b</CardSubtitle>
                        <CardText>c</CardText>
                        {/* <Button color="danger" onClick={() => this.props.removeSports(id)}>Delete</Button> */}
                        </CardBody>
                    </Card>
                </div>
                </Col>
                
            </Row>
        </Container>
    )
      
    }
  }
  
  export default SportsCard;