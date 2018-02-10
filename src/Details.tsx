import * as React from 'react';
import { Row } from 'react-bootstrap';
import './App.css';

export interface IDetailsProps {
}

const companyWrapper: React.CSSProperties = {
    fontSize: '30px',
    paddingTop: '10px',
    fontWeight: 'bold'
};

const tas: React.CSSProperties = {
    color: '#2986a5'
};

export class Details extends React.Component<IDetailsProps, {}> {
    constructor(props: IDetailsProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <div className="my-name">Harish Soni</div>
                    <div className="profile">Software Developer</div>
                    <div style={companyWrapper}>
                        <span className="codi">CODI</span><span style={tas}>TAS</span>
                    </div>
                    <div style={{ paddingBottom: '10px' }}><span style={tas}>Technologies,</span><span>Pune</span></div>
                    <div className="my-quote">
                        “The art of coding, not only coding but coding with passion is the most
powerful weapon to build the best out of the rest and that's my quote which I am
following.This is Harish Soni for you. ReactJS &amp; TypeScript programmer. Software
Developer by profession.”
                    </div>
                </Row>
            </div>
        );
    }
}