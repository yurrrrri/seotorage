import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header aria-label="Global" className="pl-10 pt-10 h-16" style={{ fontWeight: '700' }}>
      <Link to="/" className='text-indigo-950'>
        <span style={{ fontFamily: 'GeekbleMalrangiche' }}>
          SEOTORAGE 📚
        </span>
      </Link>
    </header>
  )
}