import PropTypes from "prop-types";
export const Book = ({ book }) => {
  const { image, tags, bookName, author, category, rating } = book;
  // console.log(book)
  return (
    <div className="p-4 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
      <img
        src={image}
        alt=""
        className="object-cover p-5 bg-[#F3F3F3] rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
          Quisque
        </span>
        <h2 className="text-xl font-semibold tracking-wide">
          Nam maximus purus
        </h2>
      </div>
      <p className="dark:text-gray-800">
        Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed
        feugiat mi. Etiam ut lacinia dui.
      </p>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};
