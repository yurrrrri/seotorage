export function SettingsPage() {
  return (
    <div className="flex flex-col h-content p-4 py-6 rounded-sm shadow-xs/20 border border-zinc-200 bg-white">
      <ul>
        <div className="flex flex-row justify-between items-center pb-4 border-b">
          <li>Switch window Mode(Light/Dark)</li>
          <input
            role="switch"
            type="checkbox"
            className="toggle w-10 h-6 border border-zinc-400 rounded-xl"
            style={{ appearance: "none" }}
          />
        </div>
      </ul>
    </div>
  );
}
