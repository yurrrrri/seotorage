import { useState } from "react"

export function ContentWrite() {
  const [sentenceLength, setSentenceLength] = useState(0);
  const [memoLength, setMemoLength] = useState(0);

  return (
    <div className="py-4 mt-4 grid grid-cols-2 gap-4">
      <div className="bg-zinc-100 h-52 mb-4 rounded-sm flex justify-center items-center">이미지 삽입 영역</div>
      <div>
        <input type='number' required placeholder="pages" min={0} className="h-8 p-2 rounded-sm border-solid border-1 border-zinc-300 max-w-24" />
        <textarea className="mt-2 w-full min-h-28 p-2 border border-zinc-300 rounded-sm"
          placeholder="Up to 500 characters can be entered" maxLength={500} onChange={e => setSentenceLength(e.target.value.length)} />
        <p className=" text-zinc-500 justify-self-end" style={{ fontSize: 12 }}>{sentenceLength}/500</p>
        <input type='text' className="w-full h-8 mt-2 p-2 rounded-sm border-solid border-1 border-zinc-300"
          placeholder="Up to 200 characters can be entered" maxLength={200} onChange={e => setMemoLength(e.target.value.length)} />
        <p className=" text-zinc-500 justify-self-end" style={{ fontSize: 12 }}>{memoLength}/200</p>
      </div>
    </div>
  )
}