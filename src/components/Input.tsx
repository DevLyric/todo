import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../types/FormValues";

interface InputProps {
  type: "email" | "password" | "text";
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  errors: FieldErrors<IFormValues>;
  placeholder: string;
  required: boolean;
}

export default function Input({
  type,
  label,
  register,
  errors,
  placeholder,
  required,
}: InputProps) {
  return (
    <input
      type={type}
      className="w-full border rounded outline-none p-3"
      {...register(label, { required })}
      aria-invalid={errors[type] ? "true" : "false"}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
}
