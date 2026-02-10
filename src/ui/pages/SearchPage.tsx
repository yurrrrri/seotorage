import Button from "@component/Button";

export default function SearchPage() {
  return <div className="flex flex-col gap-4">
    <div className="flex flex-row">
      <input className="bg-zinc-200 h-8 p-2 rounded-sm mr-1 grow border-solid border-1 border-zinc-300" />
      <Button >Search</Button>
    </div>
    <span>This is book search page.</span>
  </div>
}