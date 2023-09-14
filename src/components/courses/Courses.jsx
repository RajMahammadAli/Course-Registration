import { useEffect, useState } from "react";
import Course from "./Course";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  console.log(courses);
  useEffect(() => {
    fetch("coursesApi.json")
      .then((res) => res.json())
      .then((data) => setCourses(data.courses));
  }, []);
  return (
    <>
      <div className="w-[70%] border-2">
        <h1>Display all the Courses Here {courses.length}</h1>
        <div>
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      </div>
    </>
  );
}
