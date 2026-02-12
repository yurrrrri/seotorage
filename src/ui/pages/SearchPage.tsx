import Button from "@component/Button";
import Input from "@component/Input";
import { BookSearchList } from "../../core/testData/search-sample";
import { Link } from "react-router-dom";

export function SearchPage() {
  return (
    <div className="flex flex-col gap-4 h-full min-w-[700px]">
      <div className="flex flex-row">
        <Input placeholder="검색어를 입력해주세요" />
        <Button>Search</Button>
      </div>
      {BookSearchList.length > 0 && (
        <div className="mt-4 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 justify-self-center self-center w-full h-content">
          {BookSearchList.map(book => (
            <Link to="/" key={book.id} className="flex flex-row p-3 mb-2 min-w-42 min-h-[190px] rounded-sm shadow-sm/20 border border-zinc-300"
              style={{ fontSize: 13, lineHeight: 1.2 }}>
              <img src={book.coverImage} style={{ minWidth: 110, height: 162 }} />
              <div className="flex flex-col ml-4">
                <p className="bg-indigo-50 p-1 pl-2 border-l-2" style={{ fontWeight: 700, fontSize: 15 }}>{book.title.substring(0, 28)}{book.title.length > 28 && "..."}</p>
                <p className="text-zinc-500 mt-1 mb-2">{book.author.substring(0, book.author.indexOf("("))}</p>
                <p className="text-zinc-700" style={{ lineHeight: 1.3, textAlign: 'justify' }}>{book.description.substring(0, 90)}...</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}