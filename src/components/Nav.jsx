import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="navbar font-work">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
             <NavLink to="/" className={({ isActive }) =>
              isActive ? 'border border-[#23BE0A] text-[#23BE0A] font-semibold' : 'hover:border'
            }>
            Home
          </NavLink>
          <NavLink to="/listedBooks" className={({ isActive }) =>
              isActive ? 'border border-[#23BE0A] text-[#23BE0A] font-semibold' : 'hover:border'
            }>
            Listed Books
          </NavLink>
          <NavLink to="/pageRead" className={({ isActive }) =>
              isActive ? 'border border-[#23BE0A] text-[#23BE0A] font-semibold' : 'hover:border'
            }>
            Pages to Read
          </NavLink>
          <NavLink to="/bookReview" className="px-2">
            Book Reviews
          </NavLink>
          <NavLink to="/bookChallenge" className="px-2">
            Reading Challenges
          </NavLink>
          </ul>
        </div>
        <Link className=" font-bold text-2xl">Book Vibe</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base *:ml-2 *:rounded-md *:p-2">
          <NavLink to="/" className={({ isActive }) =>
              isActive ? 'border border-[#23BE0A] text-[#23BE0A] font-semibold' : 'hover:border'
            }>
            Home
          </NavLink>
          <NavLink to="/listedBooks" className={({ isActive }) =>
              isActive ? 'border border-[#23BE0A] text-[#23BE0A] font-semibold' : 'hover:border'
            }>
            Listed Books
          </NavLink>
          <NavLink to="/pageRead" className={({ isActive }) =>
              isActive ? 'border border-[#23BE0A] text-[#23BE0A] font-semibold' : 'hover:border'
            }>
            Pages to Read
          </NavLink>
          <NavLink to="/bookReview" className="px-2">
            Book Reviews
          </NavLink>
          <NavLink to="/bookChallenge" className="px-2">
            Reading Challenges
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end space-x-3 text-white">
        <Link>
          <button className="btn text-white bg-[#23BE0A] hover:bg-transparent hover:btn-success">
            Sign In
          </button>
        </Link>
        <Link>
          <button className="btn text-white bg-[#59C6D2] hover:bg-transparent hover:btn-info">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};
