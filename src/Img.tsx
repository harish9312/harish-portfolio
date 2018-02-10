import * as React from 'react';
import { Row } from 'react-bootstrap';
const myImg = require('./myImg.jpg');

export interface ImgProps {
}

const imgContainer: React.CSSProperties = {
    width: '200px',
    margin: 'auto',
};

const imgStyle: React.CSSProperties = {
    width: '200px',
    borderRadius: '100px',
    boxShadow: '0 0px 0px rgba(0, 0, 0, 1), 0 3px 25px rgba(0, 0, 0, 0.23)',
};

export class Img extends React.Component<ImgProps, {}> {
    constructor(props: ImgProps) {
        super(props);
    }

    render() {
        return (
            <Row style={{ padding: '30px 30px 0px', backgroundColor: '#FFFFFF' }}>
                <div style={imgContainer}>
                    <img style={imgStyle} src={myImg} />
                </div>
            </Row>
        );
    }
}