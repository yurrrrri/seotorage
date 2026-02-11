export default function Button({ children, bgColor = '', className = '', ...props }) {
  let classNames = "text-sm h-8 inline-flex items-center justify-center rounded-sm p-2.5 text-white min-w-18 ";

  if (!!bgColor) {
    classNames += bgColor;
  } else {
    classNames += "bg-indigo-800";
  }

  if (!!className) {
    classNames += " " + className;
  }

  return (
    <button
      {...props}
      type="button"
      className={classNames}
    >
      {children}
    </button>
  )
}