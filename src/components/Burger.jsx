import { useState } from "react";
import Nav from "./Nav";
const Burger = () => {
  const [open, setOpen] = useState(true);
  return (
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
  );
};

export default Burger;
