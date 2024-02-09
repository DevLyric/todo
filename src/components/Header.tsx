import { useAuth } from "../hooks/useAuth";

export default function Header() {
  const auth = useAuth();

  return (
    <header className="shadow">
      <div className="container mx-auto flex items-center justify-between py-7 px-6">
        <h1 className="text-2xl font-semibold">ToDo</h1>

        <button onClick={() => auth?.logout()}>Log out</button>
      </div>
    </header>
  );
}
