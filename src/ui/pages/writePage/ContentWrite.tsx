import { Form } from "@component/Form";
import { FormItem } from "@component/FormItem";
import { useState } from "react";
import { useContentWrite } from "./useContentWrite";

const TextLengthInfo = ({ children }) => {
  return <p className=" text-zinc-500 justify-self-end" style={{ fontSize: 12 }}>{children}</p>
}

const borderCn = "rounded-sm border border-zinc-300";
const acceptable = ".jpg, .jpeg, .png";

export function ContentWrite() {
  const [sentenceLength, setSentenceLength] = useState(0);
  const [memoLength, setMemoLength] = useState(0);

  const { form, handleChange } = useContentWrite();

  return (
    <Form form={form} className="py-4 mt-4 grid grid-cols-2 gap-4">
      <label className="bg-zinc-100 h-52 mb-4 rounded-sm flex justify-center items-center cursor-pointer">
        ➕
        <FormItem name="thumbnail">
          <input type="file" accept={acceptable} multiple={false} onChange={handleChange} />
        </FormItem>
      </label>
      <div>
        <FormItem name="pageNumber">
          <input type='number' required placeholder="pages" min={0} className={`max-w-24 h-8 p-2 ${borderCn}`} />
        </FormItem>
        <FormItem name="sentence">
          <textarea className={`w-full min-h-28 mt-2 p-2 ${borderCn}`} maxLength={500}
            placeholder="Up to 500 characters can be entered" onChange={e => setSentenceLength(e.target.value.length)} />
        </FormItem>
        <TextLengthInfo>{sentenceLength}/500</TextLengthInfo>
        <FormItem name="memo">
          <input type='text' className={`w-full h-8 mt-2 p-2 ${borderCn}`} maxLength={200}
            placeholder="Up to 200 characters can be entered" onChange={e => setMemoLength(e.target.value.length)} />
        </FormItem>
        <TextLengthInfo>{memoLength}/200</TextLengthInfo>
      </div>
    </Form>
  )
}