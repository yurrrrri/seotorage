import Button from "@component/Button";
import Modal from "@component/Modal";
import { useState } from "react";

export default function MainPage() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>OPEN</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <span>Hi, I'm modal.</span>
      </Modal>
    </>
  )
}