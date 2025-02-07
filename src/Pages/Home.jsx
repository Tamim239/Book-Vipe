import { useLoaderData } from "react-router-dom"
import { Banner } from "../components/Banner"
import { Books } from "../components/Books"


export const Home = () => {
  const booksList = useLoaderData()
  // console.log(booksList)
  return (
    <div>
      <div className="md:my-12 my-5 bg-[#1313130D] rounded-3xl">
        <Banner></Banner>
    </div>
        <Books booksList={booksList}></Books>
    </div>
  )
}
