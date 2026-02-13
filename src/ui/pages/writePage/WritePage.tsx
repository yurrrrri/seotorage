import type { Book } from "@domain/Book";
import { Link, useParams } from "react-router-dom"
import Button from "@component/Button";
import { BookNotFound } from "./BookNotFound";
import { BookDetail } from "./BookDetail";
import { BookSearchList } from "../../../core/testData/search-sample";
import { ContentWrite } from "./ContentWrite";

export function WritePage() {
  const { bookId } = useParams();

  const book: Book | undefined = BookSearchList.find(b => b.id === bookId);

  if (!book) {
    return <BookNotFound />
  }

  return (
    <div className="flex flex-col w-full h-full p-6 min-w-[600px] max-w-4xl"
      style={{ fontSize: 14 }}>
      <BookDetail book={book} />

      <ContentWrite />

      <div className='flex justify-between'>
        <Button type="button" bgColor='bg-zinc-700 hover:bg-zinc-800'>
          <Link to="/search">⬅️ Back to List</Link>
        </Button>
        <Button type="submit">✅ Save</Button>
      </div>
    </div>
  )
}