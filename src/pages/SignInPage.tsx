import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  email: string;
  password: string;
}

export default function SignInPage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  async function onSubmit(data: IFormInput) {
    const authenticated = await auth?.login(data.email, data.password);

    if (authenticated) {
      navigate("/todo");
    }
  }

  return (
    <div className="flex justify-center mt-40">
      <div className="container mx-auto max-w-xl px-6">
        <h1 className="text-center text-3xl font-semibold sm:text-left">
          Account Login
        </h1>
        <p className="text-center text-gray-500 my-3 sm:text-left">
          If you are already a member you can login with your email address and
          password.
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
            {errors.password?.type === "required" && (
              <p role="alert" className="text-red-500">
                Password is required
              </p>
            )}
            <input
              type="password"
              className="rounded border p-3"
              {...register("password", { required: true, minLength: 6 })}
              aria-invalid={errors.password ? "true" : "false"}
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="rounded py-3 px-4 bg-blue-500 text-white font-medium outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
