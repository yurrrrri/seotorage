import { useNavigate } from "react-router-dom"

export function BookInfo({ book }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row px-2 py-3 min-w-42 min-h-[190px] rounded-sm shadow-sm/20 border border-zinc-200 cursor-pointer hover:bg-[#f8faff]"
      onClick={() => navigate(`/write/${book.id}`)}
      style={{ fontSize: 13, lineHeight: 1.2 }}>
      <img src={book.coverImage} style={{ minWidth: 110, height: 162 }} />
      <div className="flex flex-col ml-4 h-full">
        <div className="h-full">
          <h1 className="bg-indigo-50 p-1 pl-2 border-l-2 border-indigo-950" style={{ fontWeight: 600, fontSize: 15 }}>{book.title.substring(0, 28)}{book.title.length > 28 && "..."}</h1>
          <p className="text-zinc-500 ml-2 mt-1 mb-2">{book.author.substring(0, book.author.indexOf("("))}</p>
          <p className="text-zinc-700 h-full" style={{ lineHeight: 1.3, textAlign: 'justify' }}>{book.description}</p>
        </div>
      </div>
    </div>
  )
}