import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [prompt, setPrompt] = useState("");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;

  // console.log(prompt)

  const showMenu = () => {
    setMenu(!menu);
  };

  const { user } = useContext(UserContext);

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4 bg-[#141414]">
      <h1 className="text-lg md:text-xl font-extrabold text-white">
        <Link to="/">Blog Page</Link>
      </h1>
      {path === "/" && (
        <div className="flex justify-center items-center space-x-0 gap-2">
          <p
            onClick={() =>
              navigate(prompt ? "?search=" + prompt : navigate("/"))
            }
            className="cursor-pointer"
          >
            <BsSearch color="white" className=""/>
          </p>
          <input
            onChange={(e) => setPrompt(e.target.value)}
            className="outline-none px-3 rounded"
            placeholder="Search a post"
            type="text"
          />
        </div>
      )}
      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
        {user ? (
          <div onClick={showMenu}>
            <p className="cursor-pointer relative">
              <FaBars color="white"/>
            </p>
            {menu && <Menu />}
          </div>
        ) : (
          <h3 className="text-white">
            <Link to="/login">Login</Link>
          </h3>
        )}
      </div>
      <div onClick={showMenu} className="md:hidden text-lg">
        <p className="cursor-pointer relative">
          <FaBars color="white"/>
        </p>
        {menu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;




// {user ? (
//   <h3 className="text-white">
//     <Link to="/write">Write</Link>
//   </h3>
// ) : (
//   <h3 className="text-white">
//     <Link to="/login">Login</Link>
//   </h3>
// )}