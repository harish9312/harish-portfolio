import * as React from 'react';
import { Modal } from 'react-bootstrap';

export interface ISafeConnectModalProps {
    show: boolean;
}

export interface ISafeConnectModalState {
    show: boolean;
}

export class SafeConnectModal extends React.Component<ISafeConnectModalProps, ISafeConnectModalState> {
    constructor(props: ISafeConnectModalProps) {
        super(props);
        this.state = { show: false };
    }

    componentWillReceiveProps(nextProps: ISafeConnectModalState) {
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
                    <Modal.Title>A Website for Construction Company(USA)</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe
                        width="100%"
                        height="480"
                        src="http://safeconnectdemo.com"
                        frameBorder="0"
                    />
                </Modal.Body>
            </Modal>
        );
    }
}