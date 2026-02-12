import Button from "@component/Button";
import Input from "@component/Input";
import { BookSearchList } from "../../../core/testData/search-sample";
import { BookInfo } from "./BookInfo";

export function SearchPage() {
  return (<>
    <div className="flex flex-col gap-4 h-full min-w-[700px]">
      <div className="flex flex-row">
        <Input placeholder="Please enter your search term" className="w-full" />
        <Button type="button">Search</Button>
      </div>
      {BookSearchList.length > 0 && (
        <div className="mt-4 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 justify-self-center self-center w-full h-content">
          {BookSearchList.map(book => (
            <BookInfo book={book} />
          ))}
        </div>
      )}
    </div>
  </>
  )
}