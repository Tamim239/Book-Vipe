import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";

export const MainLayout = () => {
  return (
    <div className="md:w-4/5 mx-auto">
      <div className="h-18">
        <Nav></Nav>
      </div>
      <Outlet></Outlet>
    </div>
  );
};
