import { useState } from "react";
import Nav from "./Nav";
const Burger = () => {
  const [open, setOpen] = useState(true);
  return (
    // Open Burger and animate
    <>
      <div className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? (
          <div className="menu-btn__burger open"></div>
        ) : (
          <div className="menu-btn__burger"></div>
        )}
      </div>
      {open ? <Nav open={open} /> : null}
    </>
    // And then open Nav
  );
};

export default Burger;
