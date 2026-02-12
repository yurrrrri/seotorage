import { Link } from "react-router-dom";
import Button from "../../components/Button";

export function BookNotFound() {
  return (
    <div className="flex flex-col w-full h-84 mt-22 justify-center items-center bg-zinc-100 rounded-md shadow-sm/30">
      <p className="mb-4">⚠️ 도서 정보를 찾을 수 없습니다.</p>
      <Button type="button">
        <Link to="/">메인 화면으로 이동하기</Link>
      </Button>
    </div>
  )
}