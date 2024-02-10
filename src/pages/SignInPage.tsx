import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { useAuth } from "../hooks/useAuth";
import { IFormValues } from "../types/FormValues";

export default function SignInPage() {
  const auth = useAuth();
  const navigate = useNavigate();

  async function onSubmit(data: IFormValues) {
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

        <Form onSubmit={onSubmit} buttonText="Login" />
      </div>
    </div>
  );
}
