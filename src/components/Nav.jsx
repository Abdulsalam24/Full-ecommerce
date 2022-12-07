import { useEffect, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlinePlus,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsBag } from "react-icons/bs";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [view, setView] = useState(null);

  const onNav = () => {
    setNav(!nav);
  };

  const onView = (e) => {
    setView(e);
  };

  console.log(view, "vieww");

  return (
    <nav className="relative w-full border border-1 border-black bg-transparent">
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="z-[10]">
          <div onClick={onNav}>
            {nav ? <AiOutlineClose fill="#979696" /> : <AiOutlineMenu />}
          </div>
        </div>
        <div className="logo w-[5%]">
          <h2 className="font-extrabold text-xl">Estasy</h2>
        </div>

        <div className="search-cart flex items-center gap-3">
          <AiOutlineSearch />
          <BsBag />
        </div>
      </div>

      {nav && (
        <div className="fixed left-0 top-0 w-[80vw] p-4 sidenav bg-[#171717]">
          <ul className="py-9 flex flex-col gap-3">
            <li
              onClick={() => onView("men")}
              onDoubleClick={(e) => console.log(e, "ddjdjjdjd")}
            >
              <i>Men</i> <AiOutlinePlus />
            </li>
            {view === "men" && (
              <div className="view">
                <p>Top</p>
                <p>Bottom</p>
              </div>
            )}
            <li onClick={() => onView("women")}>
              <i>Women</i> <AiOutlinePlus />
            </li>
            {view === "women" && (
              <div className="view">
                <p>Top</p>
                <p>Bottom</p>
              </div>
            )}
            <li>Accessories</li>
            <li>Backpack</li>
            <li>Bundles</li>
            <li>FAQ</li>
            <li>Affiliate Program</li>
            <li>Lookbook</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
