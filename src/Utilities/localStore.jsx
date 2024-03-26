import { toast } from "react-toastify"

const getStoredData = () => {
    const storedBook = localStorage.getItem("book")
    if(storedBook){
        return JSON.parse(storedBook)
    }
    return []
}


const saveStoredData = id => {
  const storedBooks = getStoredData()
  const isExist = storedBooks.find(book => book.id === id.id)
  if(isExist){
    return toast.error("You have already Read this book")
  }
  else {
      storedBooks.push(id)
      localStorage.setItem("book", JSON.stringify(storedBooks))
      toast.success("Books Added To Read List")
  }
}


export {getStoredData, saveStoredData}