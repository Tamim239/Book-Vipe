import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { getStoredData } from "../Utilities/localStore";
import { useLoaderData } from "react-router-dom";
export const PageRead = () => {
  const [read, setRead] = useState([]);
  const readList = useLoaderData();
  useEffect(() => {
    const readStorage = getStoredData();
    if (readList.length > 0) {
      const readValue = readList.filter((value) =>
        readStorage.includes(value.bookId)
      );
      setRead(readValue);
    }
  }, [readList]);

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    const path = `M${x},${y + height}L${x + width / 2},${y}L${x + width},${y + height}Z`;
    return <path d={path} fill={fill} />;
  };
  return (
    <div className="flex justify-center">
      <BarChart
        width={1200}
        height={500}
        data={read}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" fontSize={15}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
         
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {read.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};
