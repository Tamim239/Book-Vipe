import {  useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getStoredData } from '../Utilities/localStore';
// import { useLoaderData } from 'react-router-dom';
export const PageRead = () => {
  const [read, setRead] = useState([])
  //  const readList = useLoaderData()
 const readStorage = getStoredData()
    
  return (
    <div>
      <BarChart  width={500}
      height={300}
      data={readStorage}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}>
   <CartesianGrid />
   <XAxis dataKey="bookName"></XAxis>
   <YAxis></YAxis>
   <Bar dataKey="totalPages"></Bar>
      </BarChart>

    </div>
  )
}
