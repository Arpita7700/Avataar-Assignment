import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const DynamicMenu = () => {
  const [menuItems, setMenuItems] = useState([
    // Predetermined list of items
    "home",
    "electronics",
    "books",
    "music",
    "movies",
    "clothing",
    "games",
    "furniture",
    "electronics",
    "travel",
    "botanical",
    "category name",
  ]);

  const [visibleItems, setVisibleItems] = useState([]);
  const [hiddenItems, setHiddenItems] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const updateMenu = () => {
    const screenWidth = window.innerWidth;
    const itemWidth = 160;

    let visible ,hidden;
if(screenWidth>480){

  const maxItems = Math.floor(screenWidth / itemWidth);
   visible = menuItems.slice(0, maxItems-3);
   hidden = menuItems.slice(maxItems-3);
   setVisibleItems(visible);
  setHiddenItems(hidden);
  
}else{
  setVisibleItems([]);
  setHiddenItems(menuItems);
}
    

    
  };

  useEffect(() => {
    updateMenu();
    window.addEventListener("resize", updateMenu);

    return () => {
      window.removeEventListener("resize", updateMenu);
    };
  }, [menuItems]);

  return (
    <div className="w-screen px-6 sm:px-16 py-6 bg-zinc-800 flex gap-16 justify-between overflow-hidden shrink-0">
      {/* logo  */}
      <div className="items-center flex gap-1.5 justify-center ">
        <img src="../logo.svg" alt="logo" />
        <h1 className="text-white text-xl font-bold whitespace-nowrap">E-COMM</h1>
      </div>

      {/* Menu  */}
      <div className=" grow justify-start items-center gap-16 flex font-semibold text-white capitalize">
        {visibleItems.map((item, index) => (
          <h1 className="cursor-pointer" key={index}>
            {item}
          </h1>
        ))}

        {/* Dropdown Button  */}
        <div
          className={`gap-0.5 flex items-center cursor-pointer `}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <h1 className={`${menuOpen ? "text-blue-400" : "text-white"}`}>
            {visibleItems==0 ? "menu":"more"}
          </h1>
          <IoIosArrowDown className={`${menuOpen ? "text-blue-400" : "text-white"}`}/>

          {/* DropDown Menu  */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute top-[5rem]  bg-zinc-800  space-y-2 rounded-sm border border-zinc-800 z-40`}
          >
            {hiddenItems.map((item, index) => (
              <div
                className="px-4 py-2 hover:bg-white hover:text-zinc-800 cursor-pointer"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search  Bar*/}
      <div className="sm:flex lg:w-96 hidden   border-b border-neutral-300 justify-start items-center gap-2  ">
        <AiOutlineSearch className="text-neutral-300" size={24} />
        <input
          className=" bg-transparent outline-none text-neutral-300"
          placeholder="Search something"
        />
      </div>
    </div>
  );
};

export default DynamicMenu;
