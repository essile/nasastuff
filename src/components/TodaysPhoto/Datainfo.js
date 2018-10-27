import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardImgOverlay,
    Row, Col,
} from 'reactstrap';
import MediaQuery from 'react-responsive';

class Datainfo extends Component {
    render() {
        console.log("rendering the data");
        let infoToday = this.props.d;
        return (
            <div>
                <MediaQuery query='(max-width: 1024px)'>
                    {/* Narrow width - the image as big as possibles */}
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
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    {infoToday.title}
                                </CardTitle>
                                <CardText>
                                    <small className="text-muted">copyright: {infoToday.copyright}</small>
                                </CardText>
                            </CardBody>
                            <img width="519px" src={infoToday.url} alt={infoToday.title} />
                            <CardBody>
                                <CardText>{infoToday.explanation}</CardText>
                            </CardBody>
                        </Card>
                    </MediaQuery>
                </MediaQuery>
                <MediaQuery query='(min-width: 1025px)'>
                    <MediaQuery query='(max-width: 1224px)'>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    {infoToday.title}
                                </CardTitle>
                                <CardText>
                                    <small className="text-muted">copyright: {infoToday.copyright}</small>
                                </CardText>
                            </CardBody>
                            <CardBody>
                                <Row>
                                    <Col xm={{ size: "auto", order: 4, offset: 0 }}><img width="100%" src={infoToday.url} alt={infoToday.title} /></Col>
                                    <Col xm="4"><CardText>{infoToday.explanation}</CardText></Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </MediaQuery>
                    <MediaQuery query='(min-width: 1225px)'>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    {infoToday.title}
                                </CardTitle>
                                <CardText>
                                    <small className="text-muted">copyright: {infoToday.copyright}</small>
                                </CardText>
                            </CardBody>
                            <CardBody>
                                <Row>
                                    <Col xs="8"><img width="100%" src={infoToday.url} alt={infoToday.title} /></Col>
                                    <Col xs="4"><CardText>{infoToday.explanation}</CardText></Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </MediaQuery>
                </MediaQuery>
            </div>
        );
    }
}

export default Datainfo;