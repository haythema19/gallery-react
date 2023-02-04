import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { FiSearch, FiPlus } from "react-icons/fi";
import { Search } from ".";

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();
  if (!user) return null;
  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
        <FiSearch fontSize={22} className="ml-1" />
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onfocus={() => navigate("/search")}
          className="p-2 w-full bg-white outline-none"
        />
      </div>
      <div className="flex gap-3 w-190">
        <Link
          to="/create-pin"
          className="bg-black gap-2 text-white rounded-md p-2 flex justify-between items-center"
        >
          <FiPlus size={18}/>
          Thêm ảnh
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
