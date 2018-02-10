import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
const uniIco = require('./pn.png');
const safeConnect = require('./safeConnectLogo.png');
const argos = require('./argos.png');

export interface IProjectsProps {
}

export class Projects extends React.Component<IProjectsProps, {}> {
    constructor(p: IProjectsProps) {
        super(p);
    }

    render() {
        return (
            <Row className="projects-container">
                <span style={{ paddingLeft: '30px', textAlign: 'left' }}>Projects:</span>
                <div style={{ marginLeft: '30px', width: '75px' }} className="underline" />
                <div className="card-container">
                    <div style={{ paddingTop: '25px' }}>
                        <Col className="project1" sm={5} xs={12}>
                            <img width="100%" src={uniIco} />
                        </Col>
                        <Col className="project1 project-2" sm={5} xs={12}>
                            <img width="65%" src={safeConnect} />
                        </Col>
                    </div>
                    <div>
                        <Col style={{ marginTop: '30px' }} className="project1" sm={5} xs={12}>
                            <img width="50%" src={argos} />
                        </Col>
                    </div>

                </div>
            </Row>
        );
    }
}