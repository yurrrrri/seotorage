export default function TextButton({ children, className = "", ...props }) {
  let classNames =
    "cursor-pointer text-sm h-8 inline-flex items-center justify-center min-w-18 text-zinc-600 hover:text-zinc-900 ";

  if (!!className) {
    classNames += " " + className;
  }

  return (
    <button
      {...props}
      type="button"
      className={classNames}
      style={{ fontWeight: 600 }}
    >
      {children}
    </button>
  );
}
