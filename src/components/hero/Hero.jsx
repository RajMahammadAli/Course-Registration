import Cart from "../cart/Cart";
import Courses from "../courses/Courses";

export default function Hero() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center py-8">
          Course Registration
        </h1>
        <div className=" flex p-2 gap-4">
          <Courses></Courses>
          <Cart></Cart>
        </div>
      </div>
    </>
  );
}
