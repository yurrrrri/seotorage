export default function Input({ className = '', ...props }) {
  let classNames = "bg-zinc-50 h-8 p-2 rounded-sm mr-1 border-solid border-1 border-zinc-300 ";

  if (!!className) {
    classNames += className;
  }

  return <input type="text" className={classNames} {...props} />
}