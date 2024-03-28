import { toast } from "react-toastify"
import { getStoredData } from "./localStore"



const getStoredWishlist = () => {
    const storedBook = localStorage.getItem("wishlist")
    if(storedBook){
        return JSON.parse(storedBook)
    }
    return [] 
}


const saveStoredWishlist = (id) => {
    let storedBooks = getStoredWishlist()
    const isNormal = storedBooks.includes(id)
    const bookData = getStoredData()
    const bookValue = bookData.find(book => book === id)
    if(isNormal){
        return toast.error("You have already wishlist this book")
    }
    if(bookValue){
        return toast.error("You have already read this book")
    }
    storedBooks.push(id)
    localStorage.setItem("wishlist", JSON.stringify(storedBooks))
   return toast.success("Books Added To Wishlist List")
}

export { getStoredWishlist, saveStoredWishlist }