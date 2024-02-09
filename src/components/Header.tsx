export default function Header() {
  return (
    <header className="shadow">
      <div className="container mx-auto flex items-center justify-between py-7 px-6">
        <h1 className="text-2xl font-semibold">ToDo</h1>

        <button>Log out</button>
      </div>
    </header>
  );
}
