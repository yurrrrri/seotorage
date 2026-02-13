import { Link } from "react-router-dom";
import Button from "../../components/Button";

export function BookNotFound() {
  return (
    <div className="flex flex-col w-full h-84 mt-22 justify-center items-center bg-zinc-100 rounded-md shadow-sm/30">
      <p className="mb-4">⚠️ Book information not found.</p>
      <Button type="button">
        <Link to="/">Back to Main</Link>
      </Button>
    </div>
  )
}