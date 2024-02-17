import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl">Gaurav Solanki</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className={location.pathname === '/' ? 'text-gray-300' : 'hover:text-gray-300'}>Home</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}