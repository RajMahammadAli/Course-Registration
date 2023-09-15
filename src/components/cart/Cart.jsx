export default function Cart({ titles, mySum }) {
  return (
    <>
      <div className="w-[25%] max-h-auto">
        <div className="bg-white p-2">
          <div className="my-2 p-1">
            <h1 className="text-[#2F80ED] text-base font-bold leading-7">
              Credit Hour Remaining {20 - mySum} hr
            </h1>
          </div>
          <hr />
          <div className="my-2 p-2">
            <h1 className="text-lg font-bold">Course Name</h1>
            <ol>
              {titles.map((item, idx) => (
                <li key={idx}>
                  {idx + 1}. {item}
                </li>
              ))}
              {/*  */}
            </ol>
          </div>
          <hr />
          <div className="my-2 p-2">
            <h1 className="text-base font-medium">
              Total Credit Hour : {mySum}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
