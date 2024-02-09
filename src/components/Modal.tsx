interface ModalProps {
	handleCloseModal: () => void
}

export default function Modal({ handleCloseModal }: ModalProps) {
	return (
		<div className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center bg-zinc-600/50">
			<div className="h-96 w-96 flex flex-col bg-white rounded-xl px-8 py-12">
				<button
					onClick={handleCloseModal}
					className="self-end text-xl font-semibold"
				>
					X
				</button>
			</div>
		</div>
	)
}
