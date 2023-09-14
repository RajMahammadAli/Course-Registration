import { useState } from "react";
import Cart from "../cart/Cart";
import Courses from "../courses/Courses";

export default function Hero() {
  const [titles, setTitles] = useState([]);
  const handleDisplayTitle = (title) => {
    let newTitle = [...titles, title];
    let uniqueNewTitle = [...new Set(newTitle)];

    setTitles(uniqueNewTitle);
  };
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center py-8">
          Course Registration
        </h1>
        <div className=" flex p-2 gap-4">
          <Courses handleDisplayTitle={handleDisplayTitle}></Courses>
          <Cart titles={titles}></Cart>
        </div>
      </div>
    </>
  );
}
