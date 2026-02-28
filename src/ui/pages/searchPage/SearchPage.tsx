import Button from "@component/Button";
import Input from "@component/Input";
import { BookSearchList } from "../../../core/testData/search-sample";
import { BookInfo } from "./BookInfo";

export function SearchPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <Input
          placeholder="Please enter your search term"
          type="text"
          className="w-full"
          maxLength={100}
        />
        <Button type="button">Search</Button>
      </div>
      {BookSearchList.length > 0 && (
        <section className="flex flex-col gap-2 mt-4 h-content">
          {BookSearchList.map((book) => (
            <BookInfo book={book} key={book.id} />
          ))}
        </section>
      )}
    </div>
  );
}
