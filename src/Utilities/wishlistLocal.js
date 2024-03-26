import { toast } from "react-toastify"

const getStoredWishlist = () => {
    const storedBook = localStorage.getItem("wishlist")
    if(storedBook){
        return JSON.parse(storedBook)
    }
    return [] // Return an empty array if no data is found
}

const saveStoredWishlist = (id) => {
    let storedBooks = getStoredWishlist()
    const isExist = storedBooks.includes(id)
    if(isExist){
        return toast.error("You have already wishlist this book")
    }
    storedBooks.push(id)
    localStorage.setItem("wishlist", JSON.stringify(storedBooks))
    toast.success("Books Added To Wishlist List")
}

export { getStoredWishlist, saveStoredWishlist }