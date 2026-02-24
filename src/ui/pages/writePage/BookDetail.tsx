import dayjs from "dayjs";

export function BookDetail({ book }) {
  return (
    <div className='px-3 py-4 rounded-sm shadow-sm/20 bg-white border border-zinc-200'
      style={{ lineHeight: 1.2 }}>
      <div className="flex">
        <img src={book.coverImage} style={{ width: 100, height: 130 }} />
        <div className='ml-2'>
          <h1 className="pb-2 border-b border-indigo-950"
            style={{ fontWeight: 600, fontSize: 17 }}>{book.title}</h1>
          <div className='mt-2 text-zinc-600'>
            <p>{book.author}</p>
            <p>{book.publisher} | {dayjs(book.pubDate).format("YYYY.MM.DD")}</p>
          </div>
        </div>
      </div>
      <p className='pt-4'>{book.description}</p>
    </div>
  )
}