import { useEffect, useRef, useState } from "react";
import GlobalContext from "../context/GlobalContext";

function Header() {
  const { searchQuery, setsearchQuery } = GlobalContext();

  return (
    <div className="header">
      <h1>Filter by Title/Order ID</h1>
      <input
        type="text"
        placeholder="Start typing to search"
        value={searchQuery}
        onChange={(e) => setsearchQuery(e.target.value)}
      />
    </div>
  );
}

export default Header;
