import { useState } from "react";
import Modal from "./Modal";

export default function Todo() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="container mx-auto flex flex-col mt-6 px-6">
      <button
        onClick={() => setOpenModal(true)}
        className="self-end rounded p-2 text-white font-medium bg-pink-500"
      >
        New task
      </button>

      {openModal && <Modal handleCloseModal={() => setOpenModal(false)} />}
    </div>
  );
}
