import { useEffect, useRef } from "react";
import Button from "./Button";

export default function Modal({
  children,
  title = "",
  open,
  onClose,
  ...props
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current;

    if (open && !!modal) {
      modal.showModal();
    }
  });

  return (
    <>
      {open && (
        <>
          <dialog
            {...props}
            ref={dialog}
            onClose={onClose}
            className="w-84 h-64 flex flex-col justify-self-center self-center bg-zinc-950 text-white drop-shadow-2xl/40"
          >
            <header className="h-12 p-4 w-full" style={{ fontWeight: 700 }}>
              <span>{title}</span>
              <div
                className="justify-self-end cursor-pointer"
                onClick={onClose}
              >
                X
              </div>
            </header>
            <div className="p-4 grow text-center content-center">
              {children}
            </div>
            <footer className="p-4 justify-self-end self-end">
              <Button type="button" className="mr-1">
                OK
              </Button>
              <Button
                type="button"
                bgColor="bg-zinc-400 hover:bg-zinc-500"
                onClick={onClose}
              >
                Close
              </Button>
            </footer>
          </dialog>
          <Backdrop />
        </>
      )}
    </>
  );
}

const Backdrop = () => (
  <div className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
);
