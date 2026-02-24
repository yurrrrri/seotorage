import Button from "@component/Button";
import TextButton from "@component/TextButton";
import type { Book } from "@domain/Book";
import { Link, useParams } from "react-router-dom";
import { BookSearchList } from "../../../core/testData/search-sample";
import { BookDetail } from "./BookDetail";
import { BookNotFound } from "./BookNotFound";
import { ContentWrite } from "./ContentWrite";

export function WritePage() {
  const { bookId } = useParams();

  const book: Book | undefined = BookSearchList.find(b => b.id === bookId);

  if (!book) {
    return <BookNotFound />
  }

  return (
    <div className="flex flex-col"
      style={{ fontSize: 14 }}>
      <BookDetail book={book} />

      <ContentWrite />

      <div className='flex justify-between'>
        <TextButton>
          <Link to="/">⬅️ Back to List</Link>
        </TextButton>
        <Button type="submit">✅ Save</Button>
      </div>
    </div>
  )
}