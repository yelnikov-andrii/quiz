import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export const ModalComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    handleShow()
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>The time is up</Modal.Body>
      </Modal>
    </>
  );
}