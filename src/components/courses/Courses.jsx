import { useEffect, useState } from "react";
import Course from "./Course";

export default function Courses({ handleDisplayTitle }) {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("coursesApi.json")
      .then((res) => res.json())
      .then((data) => setCourses(data.courses));
  }, []);
  return (
    <>
      <div className="w-[75%]">
        <div className="grid grid-cols-3 gap-3">
          {courses.map((course) => (
            <Course
              key={course.id}
              course={course}
              handleDisplayTitle={handleDisplayTitle}
            ></Course>
          ))}
        </div>
      </div>
    </>
  );
}
