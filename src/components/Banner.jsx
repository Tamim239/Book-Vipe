import { Link } from "react-router-dom"
import banner from '../assets/banner.png'
export const Banner = () => {
  return (
     <div className="flex items-center p-10">

           <div className="flex-1 md:p-10">
            <h1 className="text-6xl font-bold font-play leading-snug">Books to freshen up your bookshelf</h1>
            <Link to="/listedBooks"><button className="btn text-white bg-[#23BE0A] hover:bg-transparent hover:btn-success mt-8">
            View The List
          </button></Link>
           </div>
           <div className="md:p-10">
            <img src={banner} alt="" />
           </div>


     </div>
  )
}
