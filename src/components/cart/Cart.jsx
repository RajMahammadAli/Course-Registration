import { useState } from "react";

export default function Cart({ titles, totlalDuration, courseArray }) {
  let sum = 0;
  courseArray.map((item) => (sum += parseFloat(item.duration)));
  var item = courseArray.map(function (item) {
    return item;
  });

  return (
    <>
      <div className="w-[25%] max-h-auto">
        <div className="bg-white p-2">
          <div className="my-2 p-1">
            <h1 className="text-[#2F80ED] text-base font-bold leading-7">
              Credit Hour Remaining {20 - sum} hr
            </h1>
          </div>
          <hr />
          <div className="my-2 p-2">
            <h1 className="text-lg font-bold">Course Name</h1>
            {/* <ol>
              {Object.key(courseArray).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol> */}
            <ol>
              {item.map((item, idx) => (
                <li key={idx}>
                  {idx + 1}. {item.title}
                </li>
              ))}
              {/*  */}
            </ol>
          </div>
          <hr />
          <div className="my-2 p-2">
            <h1 className="text-base font-medium">Total Credit Hour : {sum}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
