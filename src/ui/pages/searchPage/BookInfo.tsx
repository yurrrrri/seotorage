import { useNavigate } from "react-router-dom";

export function BookInfo({ book }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row p-2 min-w-42 rounded-sm shadow-xs/20 border border-zinc-200 cursor-pointer bg-white hover:inset-shadow-sm/30"
      onClick={() => navigate(`/write/${book.id}`)}
      style={{ fontSize: 13, lineHeight: 1.25 }}>
      <img src={book.coverImage} className="rounded-md" style={{ minWidth: 80, height: 120 }} />
      <div className="flex flex-col w-full">
        <h1 className="border-b border-indigo-900 ml-3 py-1" style={{ fontWeight: 600, fontSize: 14.5 }}>{book.title}</h1>
        <p className="text-zinc-500 ml-3 mt-4">{book.author.substring(0, book.author.indexOf("("))}</p>
        <p className="text-zinc-700 ml-3" style={{ marginTop: 1 }}>{book.publisher}</p>
      </div>
    </div>
  )
}