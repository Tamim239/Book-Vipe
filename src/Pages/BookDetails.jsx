import { useLoaderData, useParams } from "react-router-dom";
import { saveStoredData } from "../Utilities/localStore";
import { saveStoredWishlist } from "../Utilities/wishlistLocal";
import { toast } from "react-toastify";

export const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.bookId === idInt);

  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleReadBtn = () => {
    saveStoredData(idInt);
  };
  const handleWishlistBtn = () => {
    const bookData = localStorage.getItem("book");
    if (bookData) {
      const bookValue = JSON.parse(bookData);
      const wishlistData = localStorage.getItem("wishlist");
      const wishlist =  JSON.parse(wishlistData)
      if (bookValue.includes(wishlist)) {
         saveStoredWishlist(idInt);
        //  wishlist.push(bookValue);
        //  localStorage.setItem('wishlist', JSON.stringify(wishlist));
      } 
      else {
        if(wishlist){
         return saveStoredWishlist(idInt)
        // return toast.error("You have already wishlist this book")
        }
       return toast.error("You have already Read this book");
 
      }
    }
    saveStoredWishlist(idInt);
  };

  return (
    <div className="flex items-center gap-3 my-10">
      <div className="w-1/2">
        <figure className="bg-[#1313130D] w-full p-4 flex justify-center rounded-2xl">
          <img src={image} alt="book" className=" object-cover w-4/5  p-10" />
        </figure>
      </div>
      <div className="w-1/2 pl-5">
        <div className="space-y-2 border-b-2 py-2">
          <h1 className="font-bold text-4xl font-play">{bookName}</h1>
          <p className="font-medium">By : {author}</p>
        </div>
        <div className="border-b py-2">
          <p>{category}</p>
        </div>
        <div className="space-y-2 py-3 border-b-2">
          <p>
            <span className="font-bold">review: </span>
            {review}
          </p>
          <p>
            Tag{" "}
            {tags.map((tag) => (
              <span className="px-2 text-[#23BE0A] p-2 " key={tag}>
                #{tag}
              </span>
            ))}
          </p>
        </div>
        <div className="py-3 space-y-3">
          <h2>Number of Pages: {totalPages}</h2>
          <h3>Publisher: {publisher}</h3>
          <p>Year of Publishing: {yearOfPublishing}</p>
          <p>Rating: {rating}</p>
        </div>
        <div className="space-x-3 font-semibold">
          <button onClick={handleReadBtn} className="btn btn-outline">
            Read
          </button>
          <button
            onClick={handleWishlistBtn}
            className="btn text-white bg-[#59C6D2] hover:bg-transparent hover:btn-info"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
