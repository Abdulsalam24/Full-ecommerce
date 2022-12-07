import React from "react";
import Nav from "./Nav";

const Header = () => {
  const backgroundStyle = {
    backgroundImage: `url(https://cdn.shopify.com/s/files/1/2406/5155/files/Untitled_design_-_2022-10-21T095101.205_x800.png?v=1666360275)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <header
      style={backgroundStyle}
      className="min-h-[32vh] w-full outline outline-red-700"
    >
      {/* w-[80%] mx-auto py-5 text-center  */}
      <Nav />
      <div className="flex flex-col gap-3 items-center text-center justify-center">
        <h2 className="text-2xl text-white uppercase">Shop all</h2>
        <button className="bg-[#F47026] text-inherit font-bold py-3 px-8 uppercase">
          Shop now
        </button>
      </div>
    </header>
  );
};

export default Header;
