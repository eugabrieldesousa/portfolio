import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [ballStyle, setBallStyle] = useState({});
  const navRefs = useRef([]);

  const navItems = ["Home", "Sobre", "Projetos", "Contato"];

  useEffect(() => {
    const updateBallPosition = () => {
      const currentItem = navRefs.current[selectedIndex];
      if (currentItem) {
        const { offsetLeft, offsetWidth, offsetHeight } = currentItem;
        setBallStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
          height: `${offsetHeight}px`,
        });
      }
    };

    updateBallPosition();
    window.addEventListener("resize", updateBallPosition);

    return () => {
      window.removeEventListener("resize", updateBallPosition);
    };
  }, [selectedIndex]);

  return (
    <nav className="relative rounded-full bg-black px-4 py-2 shadow-md shadow-gray-400">
      <ul className="relative flex">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`relative z-10 flex w-20 cursor-pointer items-center justify-center px-4 py-2 text-sm lowercase transition duration-300 hover:brightness-75 ${
              selectedIndex === index ? "text-black" : "text-white"
            }`}
            onClick={() => setSelectedIndex(index)}
            ref={(el) => (navRefs.current[index] = el)}
          >
            {item}
          </li>
        ))}
        <div
          className="absolute z-0 rounded-full bg-white transition-all duration-300 ease-in-out"
          style={ballStyle}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
