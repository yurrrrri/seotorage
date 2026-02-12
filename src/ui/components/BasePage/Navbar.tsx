import { NavLink } from "react-router-dom";

export default function Navbar() {
  const active = (isActive: boolean) => {
    return isActive ? 'text-indigo-200' : ''
  }
  return (
    <nav className='bg-zinc-900 p-6 pt-18 pl-10 mt-24 rounded-tr-4xl min-w-[190px]' style={{ height: 'calc(100% - 160px)', fontFamily: "sans-serif" }}>
      <ul className='text-white flex flex-col gap-6'
        style={{ fontSize: 15 }}>
        <li key="nav-search">
          <NavLink to='/search' className={({ isActive }) => active(isActive)}>🔍 Search</NavLink>
        </li>
        <li key="nav-my">
          <NavLink to='/my' className={({ isActive }) => active(isActive)}>📖 My Seotorage</NavLink>
        </li>
        <li key="nav-settings">
          <NavLink to='/settings' className={({ isActive }) => active(isActive)}>⚙️ Settings</NavLink>
        </li>
      </ul>
    </nav>
  )
}