import dayjs from 'dayjs';
import { Link, useParams } from "react-router-dom"
import { BookSearchList } from "../../core/testData/search-sample";
import type { Book } from "@domain/Book";
import Button from "@component/Button";

export function WritePage() {
  const { bookId } = useParams();

  const book: Book | undefined = BookSearchList.find(b => b.id === bookId);

  if (!book) {
    return <div className="flex flex-col w-full h-full justify-center items-center bg-zinc-100 rounded-md shadow-sm/30">
      <p className="mb-4">⚠️ 도서 정보를 찾을 수 없습니다.</p>
      <Button type="button">
        <Link to="/">메인 화면으로 이동하기</Link>
      </Button>
    </div>
  }

  return <div className="flex flex-col w-full h-full p-6 min-w-[600px] max-w-4xl"
    style={{ fontSize: 15 }}>
    <div className='flex flex-row p-4 rounded-sm shadow-sm/20'>
      <img src={book.coverImage} style={{ width: 110, height: 162 }} />
      <div className='ml-4 w-full'>
        <h1 className="w-full bg-indigo-50 p-2 pl-4 border-l-2 border-indigo-950"
          style={{ fontWeight: 600, fontSize: 17 }}>{book.title}</h1>
        <div className='flex gap-4 justify-between mt-2 text-zinc-600 ml-4'>
          <span>{book.author}</span>
          <span>{book.publisher} | {dayjs(book.pubDate).format("YYYY.MM.DD")}</span>
        </div>
        <p className='max-w-[400px] mt-6 ml-4' style={{ lineHeight: 1.3 }}>{book.description}</p>
      </div>
    </div>

    <div className='flex justify-between mt-4'>
      <Button type="button" bgColor='bg-zinc-400 hover:bg-zinc-500'>
        <Link to="/search">목록으로 돌아가기</Link>
      </Button>
      <Button type="submit">저장</Button>
    </div>
  </div>
}