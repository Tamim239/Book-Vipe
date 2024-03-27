import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
export const LisetedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <div>
       <h1 className="text-center font-bold text-3xl bg-[#1313130D] p-5 rounded-xl">
        Books
      </h1>

     <div className="flex justify-center">
     <Menu menuButton={<MenuButton className="flex items-center gap-2 bg-[#23BE0A] text-white btn m-1 font-semibold hover:bg-black"> Sort By<IoIosArrowDown /></MenuButton>} transition>
      <MenuItem>Rating</MenuItem>
     <Link to='read' onClick={()=> setTabIndex(0) }><MenuItem>Read</MenuItem></Link>
     <Link to='wishlist' onClick={()=> setTabIndex(1) }><MenuItem>Wishlist</MenuItem></Link>
     </Menu>
     </div>
      <div className="flex items-center  overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
        to="read"
        onClick={()=> setTabIndex(0)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  dark:border-gray-600 dark:text-gray-600 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read</span>
        </Link>
        <Link
        to="wishlist"
        onClick={()=> setTabIndex(1)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  dark:border-gray-600 dark:text-gray-600 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist</span>
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};
