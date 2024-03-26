import { toast } from "react-toastify"

const getStoredData = () => {
    const storedBook = localStorage.getItem("book")
    if(storedBook){
        return JSON.parse(storedBook)
    }
    return [] // Return an empty array if no data is found
}

const saveStoredData = (id) => {
    let storedBooks = getStoredData()
    const isExist = storedBooks.includes(id)
    if(isExist){
        return toast.error("You have already Read this book")
    }
    storedBooks.push(id)
    localStorage.setItem("book", JSON.stringify(storedBooks))
    toast.success("Books Added To Read List")
}

export { getStoredData, saveStoredData }
