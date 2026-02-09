const Button = ({ children }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-sm p-2.5 text-gray-200 bg-gray-900"
    >
      {children}
    </button>
  )
}

export default Button;