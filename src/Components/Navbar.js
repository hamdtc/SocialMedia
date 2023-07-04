import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <span>
          <Link
            to="/"
            className="link"
            style={{ color: "red", fontSize: "24px" }}
          >
            My Media
          </Link>
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
