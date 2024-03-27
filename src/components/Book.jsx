import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
export const Book = ({ book }) => {
  const { image, tags, bookName, author, category, rating, bookId } = book;
  
  return (
    <div className="card card-compact bg-base-100 border p-4">
    <Link to={`/bookDetails/${bookId}`}>
    <figure className="bg-[#F3F3F3] p-4 rounded-2xl"><img src={image} alt="Shoes"  /></figure>
    <div className="mt-3 mb-2 space-y-2">
         {
          tags.map(tag =>  <button className=" btn ml-2 text-[#23BE0A] p-2 text-sm font-medium  underline" key={tag}> {tag}
          </button> )
         }
       
        <h2 className="text-xl font-semibold tracking-wide">
         {bookName}
        </h2>
        <p>By : {author}</p>
      </div>
      <div>
        <div className="flex justify-between font-medium">
          <h1>{category}</h1>
          <p className="flex items-center gap-2">{rating}  <CiStar size={20}/></p>
        </div>
      </div>
  </Link>
  </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};
