import Button from "@component/Button";
import Input from "@component/Input";
import Modal from "@component/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookSearchList } from "../../core/testData/search-sample";

export function SearchPage() {
  const [open, setOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  return (<>
    {open && (
      <Modal open={open} onClose={() => setOpen(false)}>
        <span>Hi, I'm detail modal.</span>
      </Modal>
    )}
    <div className="flex flex-col gap-4 h-full min-w-[700px]">
      <div className="flex flex-row">
        <Input placeholder="검색어를 입력해주세요" />
        <Button type="button">Search</Button>
      </div>
      {BookSearchList.length > 0 && (
        <div className="mt-4 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 justify-self-center self-center w-full h-content">
          {BookSearchList.map(book => (
            <div key={book.id} className="flex flex-row p-3 mb-2 min-w-42 min-h-[190px] rounded-sm shadow-sm/20 border border-zinc-300"
              style={{ fontSize: 13, lineHeight: 1.2 }}>
              <img src={book.coverImage} className="cursor-pointer" style={{ minWidth: 110, height: 162 }}
                onClick={() => setOpen(true)} />
              <div className="flex flex-col ml-4 h-full">
                <div className="h-full cursor-pointer" onClick={() => setOpen(true)}>
                  <h1 className="bg-indigo-50 p-1 pl-2 border-l-2 border-indigo-950" style={{ fontWeight: 700, fontSize: 15 }}>{book.title.substring(0, 28)}{book.title.length > 28 && "..."}</h1>
                  <p className="text-zinc-500 ml-2 mt-1 mb-3">{book.author.substring(0, book.author.indexOf("("))}</p>
                  <p className="text-zinc-700 h-full" style={{ lineHeight: 1.3, textAlign: 'justify' }}>{book.description.substring(0, 35)}...</p>
                </div>
                <Button type="button" onClick={() => navigate(`/write/${book.id}`)}>기록 남기기</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </>
  )
}