import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const WishListCard = ({wish}) => {
    const {
        bookName,
        author,
        tags,
        yearOfPublishing,
        publisher,
        rating,
        category,
        totalPages,
        image,
        bookId
      } = wish;
  return (
    <div className="flex items-center gap-3 my-10 border">
    <div className="">
      <figure className="bg-[#1313130D] p-4 flex justify-center rounded-2xl">
        <img src={image} alt="book" className=" object-cover w-4/5  p-10" />
      </figure>
    </div>
    <div className="flex-1 space-y-3">
      <div className="space-y-2">
        <h1 className="font-bold text-2xl font-play">{bookName}</h1>
        <p className="font-medium">By : {author}</p>
      </div>

        <div className="flex items-center gap-5">
          <p>
            Tag{" "}
            {tags.map((tag) => (
              <span className="px-2 text-[#23BE0A] p-2 " key={tag}>
                #{tag}
              </span>
            ))}
          </p>
          <p>Year of Publishing: {yearOfPublishing}</p>
        </div>
      <div className="space-y-2 pb-3 border-b-2">
      <div className="flex items-center gap-5">
        <h3>Publisher: {publisher}</h3>
        <h2>Page: {totalPages}</h2>
      </div>
      </div>
      <div className="space-x-3 py-2 font-semibold flex items-center">
        <p className="text-[#328EFF] bg-[#328EFF26] p-3 rounded-3xl">Category : {category}</p>
        <p className="text-[#FFAC33] bg-[#FFAC3326] p-3 rounded-3xl">Rating : {rating}</p>
       <Link to={`/bookDetails/${bookId}`}> <button className="btn bg-[#23BE0A] text-white rounded-full">
          View Details
        </button></Link>
      </div>
    </div>
  </div>
  )
}
WishListCard.propTypes = {
    wish: PropTypes.object,
  };