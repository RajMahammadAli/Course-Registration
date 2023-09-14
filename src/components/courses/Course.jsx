import { BsBook } from "react-icons/bs";
export default function ({ course }) {
  console.log(course);
  const { image, title, description, price, duration } = course;
  return (
    <>
      <div>
        <div className="h-[420px] bg-base-100 shadow-xl">
          <figure>
            <img className="h-[180px]" src={image} alt="courses" />
          </figure>
          <div className="p-2">
            <h2 className="text-lg text-[#1C1B1B] font-semibold h-[50px]">
              {title}
            </h2>
            <h1 className="m-0 h-[80px]">{description}</h1>
            <div className="flex justify-between text-base font-medium">
              <p>$ Price: {price}</p>
              <p className="text-right flex items-center gap-1 h-[20px]">
                <BsBook></BsBook>
                <span>Credit: {duration}</span>
              </p>
            </div>
            <div className="card-actions justify-end pt-4">
              <button className="w-[100%] btn btn-primary">Select</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
