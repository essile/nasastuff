import React, { Component } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Row, Col,
} from 'reactstrap';
import MediaQuery from 'react-responsive';

class Datainfo extends Component {
    render() {
        console.log("rendering the data");
        let infoToday = this.props.d;
        return (
            <div>
                <MediaQuery query='(max-width: 1024px)'>
                    {/* Narrow screen - the image as big as possibles */}
                    <MediaQuery query='(max-width: 600px)' >
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    {infoToday.title}
                                </CardTitle>
                                <CardText>
                                    <small className="text-muted">copyright: {infoToday.copyright}</small>
                                </CardText>
                            </CardBody>
                            <img width="100%" src={infoToday.url} alt={infoToday.title} />
                            <CardBody>
                                <CardText>{infoToday.explanation}</CardText>
                            </CardBody>
                        </Card>
                    </MediaQuery>
                    <MediaQuery query='(min-width: 601px)'>
                    {/* Wider screen - lock the image size */}
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    {infoToday.title}
                                </CardTitle>
                                <CardText>
                                    <small className="text-muted">copyright: {infoToday.copyright}</small>
                                </CardText>
                            </CardBody>
                            <img width="75%" src={infoToday.url} alt={infoToday.title} />
                            <CardBody>
                                <CardText>{infoToday.explanation}</CardText>
                            </CardBody>
                        </Card>
                    </MediaQuery>
                </MediaQuery>
                {/* Big screen - reponsive image, text on the side */}
                <MediaQuery query='(min-width: 1025px)'>
                    <div>
                        <Card>
                            <CardBody>
                                <Row >
                                    <Col xs="6"><img width="100%" src={infoToday.url} alt={infoToday.title} /></Col>
                                    <Col xs="6" height="400px">
                                        <CardBody>
                                            <CardTitle>
                                                {infoToday.title}
                                            </CardTitle>
                                            <CardText>
                                                <small className="text-muted">copyright: {infoToday.copyright}</small>
                                            </CardText>
                                        </CardBody>
                                        <CardText>{infoToday.explanation}</CardText>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}

export default Datainfo;