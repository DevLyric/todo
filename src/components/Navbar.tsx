import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const auth = useAuth();

  return (
    <header className="border-b border-indigo-50 p-5">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-medium">Welcome, name</h1>

        <button
          className="font-medium"
          onClick={() => {
            auth?.logout();
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
