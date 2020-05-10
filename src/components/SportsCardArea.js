import React, { Component } from 'react';
import {Container,Row,Col} from 'reactstrap';
import SportsCard from './SportsCard';

class SportsCardArea extends Component{
    constructor(){
        super();
        this.state ={
            Sports: [
                {
                    title: "Cricket",
                    subtitle: "Cricket",
                    text: "Something is better than nothing"
                },
                {
                    title: "Football",
                    subtitle: "Cricket",
                    text: "Something is better than nothing"
                },
                {
                    title: "Basketball",
                    subtitle: "Cricket",
                    text: "Something is better than nothing"
                }
            ]
        }
    }
    
    render () {
        let sportsCard = this.state.Sports.map(person => {
            return (
                <Col sm="3">
                    <SportsCard Sports={Sports} />
                </Col>
            )
        })
        return (
            <Container fluid>
                <Row>
                    {SportsCard}
                </Row>
            </Container>
        )
    }
}