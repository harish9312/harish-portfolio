import * as React from 'react';
import { Modal } from 'react-bootstrap';

export interface IUnixModalProps {
    show: boolean;
}

export interface IUnixModalState {
    show: boolean;
}

export class UnixModal extends React.Component<IUnixModalProps, IUnixModalState> {
    constructor(props: IUnixModalProps) {
        super(props);
        this.state = { show: false };
    }

    componentWillReceiveProps(nextProps: IUnixModalState) {
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
            <Modal style={{ width: '100%' }} show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton={true}>
                    <Modal.Title>UnitTPoint a Unix Learning Site</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe
                        width="100%"
                        height="480"
                        src="http://unixtpoint.pe.hu"
                        frameBorder="0"
                    />
                </Modal.Body>
            </Modal>
        );
    }
}