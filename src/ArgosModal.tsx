import * as React from 'react';
import { Modal } from 'react-bootstrap';
const argosIco = require('./argosImg.png');

export interface IArgosModalProps {
    show: boolean;
}

export interface IArgosModalState {
    show: boolean;
}

export class ArgosModal extends React.Component<IArgosModalProps, IArgosModalState> {
    constructor(props: IArgosModalProps) {
        super(props);
        this.state = { show: false };
    }

    componentWillReceiveProps(nextProps: IArgosModalState) {
        this.setState({
            show: nextProps.show
        });
    }

    handleClose = () => {
        this.setState({
            show: false
        });
    }

    render() {
        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton={true}>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <img width="100%" src={argosIco} />
                </Modal.Body>
            </Modal>
        );
    }
}