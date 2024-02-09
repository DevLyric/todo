import { useForm } from "react-hook-form";

interface IFormInput {
  email: string;
  password: string;
}

export default function SignUpPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  function onSubmit(data: IFormInput) {
    console.log(data);
  }

  return (
    <div className="flex justify-center mt-40">
      <div className="container mx-auto max-w-xl px-6">
        <h1 className="text-center text-3xl font-semibold sm:text-left">
          Account Signup
        </h1>
        <p className="text-center text-gray-500 my-3 sm:text-left">
          Become a member and enjoy the app.
        </p>

        <form
          className="mt-3 flex flex-col gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            {errors.email && (
              <p role="alert" className="text-red-500">
                {errors.email.message}
              </p>
            )}
            <input
              type="email"
              className="rounded border p-3"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
              placeholder="Email address"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col">
            {errors.password && (
              <p role="alert" className="text-red-500">
                {errors.password.message}
              </p>
            )}
            <input
              type="password"
              className="rounded border p-3"
              {...register("password", {
                required: "Password is required",
              })}
              aria-invalid={errors.password ? "true" : "false"}
              placeholder="Password"
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className="rounded py-3 px-4 bg-blue-500 text-white font-medium outline-none"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
