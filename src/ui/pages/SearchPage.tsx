import Button from "@component/Button";
import Input from "@component/Input";

export default function SearchPage() {
  return <div className="flex flex-col gap-4">
    <div className="flex flex-row">
      <Input />
      <Button >Search</Button>
    </div>
    <span>This is book search page.</span>
  </div>
}