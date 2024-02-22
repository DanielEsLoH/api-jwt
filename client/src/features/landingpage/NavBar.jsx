import { Link } from "react-router-dom";
import { FaRegKeyboard } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="bg-slate-800 w-full p-4">
      <div className="flex justify-between mx-6">
        <div className="flex items-center">
          <Link to="/">
            <FaRegKeyboard className="text-white" />
          </Link>
          <Link to="/">
            <h1 className="text-white ml-2 font-semibold">NameApp</h1>
          </Link>
        </div>
        <div>
          <ul className="flex space-x-5">
            <li>
              <Link to="/" className="text-white font-semibold">Log in</Link>
            </li>
            <li>
              <Link to="/" className="text-white font-semibold">Sing up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default NavBar;