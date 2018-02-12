import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SafeConnectModal } from './SafeConnectModal';
import { ArgosModal } from './ArgosModal';
import { UnixModal } from './UnixModal';
const uniIco = require('./pn.png');
// const safeConnect = require('./safeConnectLogo.png');
// const argos = require('./argos.png');

export interface IProjectsProps {
}

export interface IProjectsState {
    showSCModal: boolean;
    showArgosModal: boolean;
    showUnixModal: boolean;
}

export class Projects extends React.Component<IProjectsProps, IProjectsState> {
    constructor(p: IProjectsProps) {
        super(p);
        this.state = {
            showSCModal: false,
            showArgosModal: false,
            showUnixModal: false
        };
    }

    showUnixModal = () => {
        this.setState({
            showSCModal: false,
            showArgosModal: false,
            showUnixModal: true
        });
    }

    showArgosModal = () => {
        this.setState({
            showSCModal: false,
            showArgosModal: true,
            showUnixModal: false
        });
    }

    showSafeConnectModal = () => {
        this.setState({
            showSCModal: true,
            showArgosModal: false,
            showUnixModal: false
        });
    }

    render() {
        return (
            <Row className="projects-container">
                <SafeConnectModal show={this.state.showSCModal} />
                <ArgosModal show={this.state.showArgosModal} />
                <UnixModal show={this.state.showUnixModal} />
                <span style={{ paddingLeft: '30px', textAlign: 'left' }}>Projects:</span>
                <div style={{ marginLeft: '30px', width: '75px' }} className="underline" />
                <div className="card-container">
                    <div style={{ paddingTop: '25px' }}>
                        <Col onClick={this.showUnixModal} className="project1" sm={5} xs={12}>
                            <img width="100%" src={uniIco} />
                            <div style={{ fontSize: '16.5px' }}>
                                This webiste is built using the <strong>AngularJS Framework</strong>.
                             This is a website focusing to provide the tutorials for the students.
                            </div>
                        </Col>
                        {/* <Col onClick={this.showSafeConnectModal} className="project1 project-2" sm={5} xs={12}>
                            <img width="35%" src={safeConnect} />
                            <div style={{ fontSize: '14px' }}>
                                This webiste is built using the <strong>ReactJS Framework with Redux</strong>.
                             This is a USA based construction company's website which is making the manual
                             form filling online.
                            </div>
                        </Col> */}
                    </div>
                    <div>
                        {/* <Col
                            onClick={this.showArgosModal}
                            style={{ marginTop: '30px' }}
                            className="project1"
                            sm={5}
                            xs={12}
                        >
                            <img width="35%" src={argos} />
                            <div style={{ fontSize: '13px' }}>
                                This webiste is built using the <strong>ReactJS Framework with Redux</strong>.
                             This is a USA based plant company's website which providing
                             listing of the plants and there details and form filling online.
                            </div>
                        </Col> */}
                    </div>

                </div>
            </Row >
        );
    }
}