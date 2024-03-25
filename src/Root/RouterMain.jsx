import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home";
import { LisetedBooks } from "../Pages/LisetedBooks";
import { PageRead } from "../Pages/PageRead";
import { ErrorPage } from "../components/ErrorPage";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
          path:"/",
          element: <Home></Home>
            },
          {
            path: "/listedBooks",
            element: <LisetedBooks></LisetedBooks>
          },
          {
            path: "/pageRead",
            element: <PageRead></PageRead>
          }
        ],
    
        
    }
])