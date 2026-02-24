import { NavLink } from "react-router-dom";

export default function Navbar() {
  const active = (isActive: boolean) => {
    return isActive ? 'text-indigo-400' : ''
  }
  return (
    <nav className='inset-shadow-sm/10 p-3 w-full' style={{ fontFamily: "sans-serif" }}>
      <ul className='justify-self-center text-zinc-800 flex flex-row gap-12 text-center'>
        <li key="nav-search">
          <NavLink to='/' className={({ isActive }) => active(isActive)}>🔍<p className="mt-1" style={{ fontSize: 12 }}>Search</p></NavLink>
        </li>
        <li key="nav-my">
          <NavLink to='/my' className={({ isActive }) => active(isActive)}>📖<p className="mt-1" style={{ fontSize: 12 }}>My Seotorage</p></NavLink>
        </li>
        <li key="nav-settings">
          <NavLink to='/settings' className={({ isActive }) => active(isActive)}>⚙️<p className="mt-1" style={{ fontSize: 12 }}>Settings</p></NavLink>
        </li>
      </ul>
    </nav>
  )
}