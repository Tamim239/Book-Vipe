
import { Book } from "./Book"
import PropTypes from 'prop-types';
export const Books = ({booksList}) => {
    
    console.log(booksList)
  return (
    <div>
        <h1 className="text-center text-4xl font-bold font-play">Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            {
                booksList.map(book => <Book book={book} key={book.bookId}></Book>)
            }
        </div>
    </div>
  )
}
Books.propTypes ={
    booksList:PropTypes.object
}