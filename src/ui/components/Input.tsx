export default function Input({ small, ...props }: { small?: boolean }) {
  let classNames = "bg-zinc-200 h-8 p-2 rounded-sm mr-1 border-solid border-1 border-zinc-300";

  if (!small) {
    classNames += " grow"
  }

  return <input type="text" className={classNames} {...props} />
}