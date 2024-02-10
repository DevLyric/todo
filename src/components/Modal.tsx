import { useForm } from "react-hook-form";
import { IFormValues } from "../types/FormValues";
import SubmitButton from "./SubmitButton";
import Input from "./Input";

interface ModalProps {
  handleCloseModal: () => void;
}

export default function Modal({ handleCloseModal }: ModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  function onSubmit(data: IFormValues) {
    console.log(data);
  }

  return (
    <div className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center px-6 bg-zinc-600/50">
      <div className="h-96 w-[500px] flex flex-col bg-white rounded-xl px-8 py-12">
        <button
          onClick={handleCloseModal}
          className="self-end text-xl font-medium"
        >
          X
        </button>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mt-8"
        >
          <Input
            type="text"
            label="taskName"
            register={register}
            errors={errors}
            required
            placeholder="Task name"
          />

          <Input
            type="text"
            label="taskDescription"
            register={register}
            errors={errors}
            required
            placeholder="Task description"
          />

          <select className="outline-none cursor-pointer">
            <option value="">Priority level</option>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>

          <SubmitButton text="Submit" />
        </form>
      </div>
    </div>
  );
}
