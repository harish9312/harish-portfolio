import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
const resumeImg = require('./resume.png');
const gmailIcon = require('./gmail.png');
const linkedInIco = require('./linkedIn.png');
const phoneIco = require('./phone.png');

export interface IFooterProps {
}

export class Footer extends React.Component<IFooterProps, {}> {
    constructor(props: IFooterProps) {
        super(props);
    }

    render() {
        return (
            <Row style={{ textAlign: 'left' }} className="footer-container">
                <Col sm={6} xs={12}>
                    <span style={{ fontSize: '20px', paddingLeft: '20px' }}>
                        Resume:
                    </span>
                    <div style={{ marginLeft: '20px', width: '75px' }} className="underline" />
                    <div className="resume-container">
                        <img src={resumeImg} />
                    </div>
                </Col>
                <Col sm={6} xs={12}>
                    <span style={{ fontSize: '20px', paddingLeft: '20px' }}>
                        Get In Touch:
                    </span>
                    <div style={{ width: '115px', marginLeft: '20px' }} className="underline" />
                    <div style={{ margin: '20px 20px 0px' }}>
                        <img height="27px" src={phoneIco} />
                        &nbsp;
                        <a href="tel:+917389292568">+917389292568</a>
                    </div>
                    <div style={{ margin: '20px 20px 0px' }}>
                        <img height="27px" src={gmailIcon} />
                        &nbsp;
                        <a href="mail:hksoni.9312@gmail.com">hksoni.9312@gmail.com</a>
                    </div>
                    <div style={{ margin: '20px 20px 0px' }}>
                        <img height="27px" src={linkedInIco} />
                        &nbsp;
                        <a
                            href="https://www.linkedin.com/in/harish-kumar-soni-1b8065119"
                            target="_blank"
                        >
                            Harish Soni
                        </a>
                    </div>

                </Col>
            </Row>
        );
    }
}