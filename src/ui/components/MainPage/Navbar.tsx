import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='bg-zinc-900 p-6 pt-18 pl-10 mt-24 rounded-tr-4xl' style={{ height: 'calc(100% - 160px)' }}>
      <ul className='text-white flex flex-col gap-6'>
        <li>
          <Link to='/search'>Search</Link>
        </li>
        <li>
          <Link to='/my'>My Seotorage</Link>
        </li>
      </ul>
    </nav>
  )
}