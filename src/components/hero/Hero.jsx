import { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Courses from "../courses/Courses";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Hero() {
  const [titles, setTitles] = useState([]);
  const [totlalDuration, setTotalDuration] = useState([]);
  const [courseArray, setCourseArray] = useState([]);
  const [mySum, setMySum] = useState(0);
  console.log(mySum);
  // console.log(mySum);

  // console.log(courseArray);

  const handleDisplayTitle = (title, duration, course) => {
    let newTitle = [...titles, title];
    let uniqueNewTitle = [...new Set(newTitle)];

    let numericDuration = parseInt(duration);

    setMySum(mySum + numericDuration);

    // console.log(mySum);

    let arrayOfTimes = [...totlalDuration, numericDuration];
    let uniqueArrayOfTimes = [...new Set(arrayOfTimes)];
    setTotalDuration(uniqueArrayOfTimes);
    setTitles(uniqueNewTitle);
    // testing
    const newCourseArray = [...courseArray, course];
    var nCourseArray = newCourseArray.map(function (item) {
      return item.title;
    });
    var isDuplicate = nCourseArray.some(function (item, idx) {
      return nCourseArray.indexOf(item) != idx;
    });
    if (isDuplicate) {
      toast("Already Selected");
    }
    const uniqueCourseArray = [...new Set(newCourseArray)];
    if (mySum <= 20) {
      // console.log(mySum);
      return setCourseArray(uniqueCourseArray);
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
            totlalDuration={totlalDuration}
            courseArray={courseArray}
          ></Cart>
        </div>
      </div>
    </>
  );
}
