import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="w-full text-center p-4 border-b border-zinc-300"
      style={{ fontWeight: "700" }}
    >
      <Link to="/" className="text-indigo-950">
        <span style={{ fontFamily: "GeekbleMalrangiche" }}>SEOTORAGE 📚</span>
      </Link>
    </header>
  );
}
