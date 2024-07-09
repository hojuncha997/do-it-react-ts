import { Title, Subtitle } from "../../components";
import { Modal, ModalContent, ModalAction, Button } from "../../theme/daisyui";
import * as D from "../../data";

export default function ModalTest() {
  const open = true; // 혹은 false
  const closeCliked = () => alert("closeClicked");
  const acceptClicked = () => alert("acceptClicked");

  return (
    <section className="mt-4">
      <Title>ModalTest</Title>
      <Modal open={open}>
        <ModalContent onCloseIconClicked={closeCliked}>
          <Subtitle>Modal</Subtitle>
          <p className="mt-4 text-justify">{D.randomParagraph()}</p>
          <ModalAction>
            <Button
              className="w-24 noraml-case btn-primary btn-sm"
              onClick={acceptClicked}
            >
              Accept
            </Button>
            <Button
              className="w-24 noraml-case btn-primary btn-sm"
              onClick={closeCliked}
            >
              Close
            </Button>
          </ModalAction>
        </ModalContent>
      </Modal>
    </section>
  );
}

// 빈 export 추가
// export {};
