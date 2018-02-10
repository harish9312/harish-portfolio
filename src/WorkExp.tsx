import * as React from 'react';
import { Row } from 'react-bootstrap';

export interface IWorkExpProps {
}

export class WorkExp extends React.Component<IWorkExpProps, {}> {
    constructor(p: IWorkExpProps) {
        super(p);
    }

    render() {
        return (
            <Row className="work">
                Work Experience:
                <div className="underline" />
                <div className="exp">Working as Software Developer at Coditas Technologies,
                     Pune from 24 July 2017 to present.</div>
            </Row>
        );
    }
}