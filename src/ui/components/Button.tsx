export default function Button({ children }) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-sm p-2.5 text-white bg-indigo-800"
    >
      {children}
    </button>
  )
}