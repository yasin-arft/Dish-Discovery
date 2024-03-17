import { LuUserCircle2 } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="container mx-auto p-4">
      <nav className="text-dark2 font-lexend">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost  p-0 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Home</a></li>
                <li><a>Recipes</a></li>
                <li><a>About</a></li>
                <li><a>Search</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost font-bold text-xl md:text-3xl text-dark">Recipe Calories</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 opacity-70">
              <li><a>Home</a></li>
              <li><a>Recipes</a></li>
              <li><a>About</a></li>
              <li><a>Search</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center gap-3 mr-2 md:mr-4">
              <CiSearch size={24} color={'#282828b3'} />
              <input type="text" placeholder="Search" className="hidden sm:inline-block input w-full max-w-xs" />
            </div>
            <a className="btn bg-green rounded-full h-auto p-2 sm:p-3">
              <LuUserCircle2 size={24} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;