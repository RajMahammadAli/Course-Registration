import { useState } from "react";
import Cart from "../cart/Cart";
import Courses from "../courses/Courses";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Hero() {
  const [titles, setTitles] = useState([]);
  const [courseArray, setCourseArray] = useState([]);
  const [mySum, setMySum] = useState(0);

  const handleDisplayTitle = (title, duration) => {
    let numericDuration = parseInt(duration);
    const newSum = mySum + numericDuration;

    if (newSum <= 20) {
      const newCourse = { title, duration };
      const isCourseAlreadySelected = courseArray.some(
        (item) => item.title === title
      );
      if (!isCourseAlreadySelected) {
        setCourseArray([...courseArray, newCourse]);
        setMySum(newSum);
        setTitles([...titles, title]);
      } else {
        toast.warning("Already Selected");
      }
    } else {
      toast.warning("Total duration 20 hr. exceeds");
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
          <Cart titles={titles} mySum={mySum}></Cart>
        </div>
      </div>
    </>
  );
}
