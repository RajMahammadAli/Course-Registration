import { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Courses from "../courses/Courses";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Hero() {
  const [titles, setTitles] = useState([]);
  const [totalDuration, setTotalDuration] = useState([]);
  const [courseArray, setCourseArray] = useState([]);
  const [mySum, setMySum] = useState(0);

  const handleDisplayTitle = (title, duration, course) => {
    const numericDuration = parseInt(duration);
    const newSum = mySum + numericDuration;

    if (newSum <= 20) {
      const newCourse = { title, duration, course };
      const isCourseAlreadySelected = courseArray.some(
        (item) => item.title === title
      );

      if (!isCourseAlreadySelected) {
        setCourseArray([...courseArray, newCourse]);
        setMySum(newSum);
        setTitles([...titles, title]);
        setTotalDuration([...totalDuration, numericDuration]);
      } else {
        toast("Already Selected");
      }
    } else {
      toast("Total duration exceeds 20");
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center py-8">
          Course Registration
        </h1>
        <div className=" flex p-2 gap-4">
          <Courses handleDisplayTitle={handleDisplayTitle}></Courses>
          <Cart
            titles={titles}
            totalDuration={totalDuration}
            courseArray={courseArray}
          ></Cart>
        </div>
      </div>
    </>
  );
}
