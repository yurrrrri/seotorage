import dayjs from "dayjs";

export function BookDetail({ book }) {
  return (
    <div className='flex flex-row p-4 rounded-sm shadow-sm/20 border border-zinc-200'>
      <img src={book.coverImage} style={{ width: 110, height: 162 }} />
      <div className='ml-4 w-full'>
        <h1 className="w-full bg-indigo-50 p-2 pl-4 border-l-2 border-indigo-950"
          style={{ fontWeight: 600, fontSize: 17 }}>{book.title}</h1>
        <div className='flex gap-4 justify-between mt-2 text-zinc-600 ml-4'>
          <span>{book.author}</span>
          <span>{book.publisher} | {dayjs(book.pubDate).format("YYYY.MM.DD")}</span>
        </div>
        <p className='max-w-[480px] mt-8 ml-4' style={{ lineHeight: 1.3 }}>{book.description}</p>
      </div>
    </div>
  )
}