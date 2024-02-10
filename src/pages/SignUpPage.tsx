import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Form from "../components/Form";
import { IFormValues } from "../types/FormValues";

export default function SignUpPage() {
  const auth = useAuth();
  const navigate = useNavigate();

  async function onSubmit(data: IFormValues) {
    const authenticated = await auth?.signUp(data.email, data.password);

    if (authenticated) {
      navigate("/signin");
    }
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

        <Form onSubmit={onSubmit} buttonText="Register" />
      </div>
    </div>
  );
}
