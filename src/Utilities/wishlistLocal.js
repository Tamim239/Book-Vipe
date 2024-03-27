import { toast } from "react-toastify"


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
    if(isNormal){
        return toast.error("local You have already wishlist this book")
    }
    storedBooks.push(id)
    localStorage.setItem("wishlist", JSON.stringify(storedBooks))
   return toast.success("local Books Added To Wishlist List")
}

export { getStoredWishlist, saveStoredWishlist }