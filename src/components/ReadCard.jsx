import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const ReadCard = ({ read }) => {
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
  } = read;
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 my-10 border">
      <div className="max-sm:w-full">
        <figure className="bg-[#1313130D]  md:p-4 flex justify-center rounded-2xl">
          <img src={image} alt="book" className=" object-cover md:w-4/5 max-sm:px-2 md:p-10" />
        </figure>
      </div>
      <div className="md:flex-1 space-y-3 max-sm:p-4">
        <div className="space-y-2">
          <h1 className="font-bold text-2xl font-play">{bookName}</h1>
          <p className="font-medium">By : {author}</p>
        </div>
          <div className="flex max-sm:flex-col md:items-center gap-5">
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
        <div className="md:space-x-3 space-x-1 py-2 font-semibold flex max-sm:flex-wrap max-sm:space-y-2  items-center">
          <p className="text-[#328EFF] bg-[#328EFF26] p-3 rounded-3xl">Category : {category}</p>
          <p className="text-[#FFAC33] bg-[#FFAC3326] p-3 rounded-3xl">Rating : {rating}</p>
         <Link to={`/bookDetails/${bookId}`}> <button className="btn bg-[#23BE0A] text-white rounded-full">
            View Details
          </button></Link>
        </div>
      </div>
    </div>
  );
};

ReadCard.propTypes = {
  read: PropTypes.object,
};
