import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I accept</Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        The modal component is a reusable component that can be used to display
        any content in a modal.
      </p>
    </Modal>
  );

  return (
    <div>

      <Button onClick={handleClick} primary>
        Open Modal
      </Button>

      {showModal && modal}
      <br/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, ipsum sit amet aliquet luctus, nisl enim aliquam diam, id
        aliquam diam diam vitae lorem. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, ipsum sit amet aliquet luctus, nisl enim aliquam diam, id
        aliquam diam diam vitae lorem. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, ipsum sit amet aliquet luctus, nisl enim aliquam diam, id
        aliquam diam diam vitae lorem. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, ipsum sit amet aliquet luctus, nisl enim aliquam diam, id
        aliquam diam diam vitae lorem. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, ipsum sit amet aliquet luctus, nisl enim aliquam diam, id
        aliquam diam diam vitae lorem. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, ipsum sit amet aliquet luctus, nisl enim aliquam diam, id
        aliquam diam diam vitae lorem. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, ipsum sit amet aliquet luctus, nisl enim aliquam diam, id
        aliquam diam diam vitae lorem. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, ipsum sit amet aliquet luctus, nisl enim aliquam diam, id
        aliquam diam diam vitae lorem. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
      </p>
    </div>
  );
}

export default ModalPage;
