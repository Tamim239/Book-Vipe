import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home";
import { LisetedBooks } from "../Pages/LisetedBooks";
import { PageRead } from "../Pages/PageRead";
import { ErrorPage } from "../components/ErrorPage";
import { BookDetails } from "../Pages/BookDetails";
import { Read } from "../components/Read";
import { Wishlist } from "../components/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../books.json")
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch(`../books.json`)

      },
      {
        path: "/listedBooks",
        element: <LisetedBooks></LisetedBooks>,
        children:[
          {
            path: "read",
            element: <Read></Read>,
            loader: () => fetch(`/books.json`)
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
            loader: () => fetch(`/books.json`)
          }
        ]
      },
      {
        path: "/pageRead",
        element: <PageRead></PageRead>,
        loader: () => fetch(`/books.json`)
      },
    ],
  },
]);
