import { useEffect, useState } from "react"
import { getStoredWishlist } from "../Utilities/wishlistLocal"
import { useLoaderData } from "react-router-dom"
import { WishListCard } from "./WishListCard"

export const Wishlist = () => {
  const [wishList, setWishList] = useState([])
   const wishListData = useLoaderData()
  useEffect(()=>{
    const wishListStorage = getStoredWishlist()
    if(wishListData.length > 0){
      const wishListBook = wishListData.filter(wish => wishListStorage.includes(wish.bookId))
      setWishList(wishListBook)
    }
  
  }, [wishListData])
  return (
    <div className="border">
      {
        wishList.map(wish => <WishListCard wish={wish} key={wish.bookId}></WishListCard>)
      }
     </div>
  
  )
}
