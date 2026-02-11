import { useEffect, useRef } from "react";
import Button from "./Button";

export default function Modal({ children, title = '', open, onClose, ...props }) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current;

    if (open && !!modal) {
      modal.showModal();
    }

    return () => modal?.close();
  })

  return (
    <>
      {open && (
        <>
          <dialog {...props} ref={dialog}
            className='w-84 h-64 flex flex-col justify-self-center self-center bg-zinc-950 text-white drop-shadow-2xl/40'>
            <header className="h-12 p-4" style={{ fontWeight: 700 }}>Hi there</header>
            <div className="p-4 grow text-center content-center">
              {children}
            </div>
            <footer className="p-4 justify-self-end self-end">
              <Button className="mr-1">OK</Button>
              <Button bgColor="bg-zinc-400" onClick={onClose}>Close</Button>
            </footer>
          </dialog>
          <Backdrop />
        </>
      )}
    </>
  )
}

const Backdrop = () => <div className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />