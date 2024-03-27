// import { useLoaderData, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getStoredData } from "../Utilities/localStore"
import { ReadCard } from "./ReadCard"
import { useLoaderData } from "react-router-dom"


export const Read = () => {
   const [read, setRead] = useState([])
   const readList = useLoaderData()
  useEffect(()=>{
    const readStorage = getStoredData()
    if(readList.length > 0){
      const readBook = readList.filter(read => readStorage.includes(read.bookId))
      setRead(readBook)
    }
  
  }, [readList])

  return (
     <div className="border">
      {
        read.map(readlist => <ReadCard read={readlist} key={readList.bookId}></ReadCard>)
      }
     </div>
  
  )
}
