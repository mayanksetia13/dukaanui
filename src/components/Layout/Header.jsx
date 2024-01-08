import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faBullhorn,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="flex justify-between items-center py-3 border-b-2">
      <div className="flex items-center gap-3 ml-3">
        <h3>Payments</h3>
        <FontAwesomeIcon icon={faCircleQuestion} style={{ color: "#c6c6c6" }} />
        <span className="text-[#a5a5a5]">How it works</span>
      </div>
      <div className="w-2/6">
        <input
          type="text"
          className="bg-[#f2f2f2] w-full px-3 py-2 rounded-md"
          placeholder="Search features, tutorials, etc."
        />
      </div>
      <div className="flex items-center gap-2 mr-3">
        <div className="rounded-full bg-[#e6e6e6] px-3 py-2">
          <FontAwesomeIcon icon={faBullhorn} style={{ color: "#4c4c4c" }} />
        </div>
        <div className="rounded-full bg-[#e6e6e6] px-3 py-2">
          <FontAwesomeIcon
            icon={faCaretDown}
            size="lg"
            style={{ color: "#4c4c4c" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
