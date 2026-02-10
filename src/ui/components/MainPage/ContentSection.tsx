import { useState } from "react"
import Button from "../Button";
import Modal from "../Modal";

export default function ContentSection() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<section className='p-8 pt-18 w-full'>
			<Button onClick={() => setOpen(true)}>OPEN</Button>
			<Modal open={open} onClose={() => setOpen(false)}>
				<span>Hi, I'm modal.</span>
			</Modal>
		</section>
	)
}