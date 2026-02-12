import Button from "@component/Button";
import Modal from "@component/Modal";
import { useState } from "react";

export function MainPage() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <main>
      <Button type="button" onClick={() => setOpen(true)}>OPEN</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <span>Hi, I'm modal.</span>
      </Modal>
    </main>
  )
}