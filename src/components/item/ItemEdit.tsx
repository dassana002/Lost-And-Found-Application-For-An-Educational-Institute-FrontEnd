import { Button, Modal } from "react-bootstrap";

interface ItemProps {
    show:boolean
}

// Create a Update Item component
export const ItemEdit = ({show}:ItemProps) => {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal
                show={show} 
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Item Update</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}