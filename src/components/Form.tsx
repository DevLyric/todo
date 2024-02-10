import { SubmitHandler, useForm } from "react-hook-form";
import { IFormValues } from "../types/FormValues";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

interface FormProps {
  onSubmit: SubmitHandler<IFormValues>;
  buttonText: string;
}
export default function Form({ onSubmit, buttonText }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 mt-8"
    >
      <div>
        {errors.email && (
          <p role="alert" className="text-red-500">
            Email is required
          </p>
        )}

        <Input
          type="email"
          label="email"
          register={register}
          errors={errors}
          required
          placeholder="Email Address"
        />
      </div>

      <div>
        {errors.password?.type === "required" && (
          <p role="alert" className="text-red-500">
            Password is required
          </p>
        )}

        <Input
          type="password"
          label="password"
          register={register}
          errors={errors}
          required
          placeholder="Password"
        />
      </div>

      <SubmitButton text={buttonText} />
    </form>
  );
}
