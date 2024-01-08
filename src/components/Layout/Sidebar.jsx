import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/store/LayoutSlice";
import profileImg from "../../assets/images/profilePicture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { sidebarItems } from "../../utils/constants/constants";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.layout.isMenuOpen);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div
      className={`fixed h-full left-0 bg-[#1e2640] xs:max-sm:w-8 ${
        isMenuOpen ? "w-60" : "w-18"
      }`}
    >
      <div className={`${isMenuOpen ? "flex items-center p-3 gap-3" : "p-3"} `}>
        <div className="w-12 h-10" onClick={toggleMenuHandler}>
          <img
            src={profileImg}
            className="w-full h-full rounded-md"
            alt="profile-picture"
          />
        </div>
        <div className={`flex ${isMenuOpen ? "" : "hidden"}`}>
          <div>
            <h4 className="text-white">Mayank Setia</h4>
            <span className="text-[#cbcfd3] underline">Vist Store</span>
          </div>
          <div className="ml-6">
            <FontAwesomeIcon
              icon={faAngleDown}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </div>
        </div>
      </div>
      <div className="mt-3">
        {sidebarItems.map((item, i) => {
          return (
            <div
              className={`w-4/5 mx-auto hover: ${
                isMenuOpen
                  ? "flex justify-start items-center gap-3 py-3"
                  : "py-3"
              } `}
              key={i}
            >
              <div className={`${isMenuOpen ? "" : "text-center"}`}>
                {item.icon}
              </div>
              <span className={`text-[#cbcfd3] ${isMenuOpen ? "" : "hidden"}`}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
