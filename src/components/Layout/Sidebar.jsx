import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/store/LayoutSlice";
import profileImg from "../../assets/images/profilePicture.jpg";
import { sidebarItems } from "../../utils/constants/constants";
import downArrowLogo from "../../assets/logos/DownArrow.png";
import walletIcon from "../../assets/logos/wallet.png";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.layout.isMenuOpen);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div
      className={`fixed h-full flex flex-col flex-[1_0_0] gap-4 py-3 px-[10px] left-0 bg-[#1e2640] xs:max-sm:w-8 ${
        isMenuOpen ? "w-56" : "w-18"
      }`}
    >
      <div className="flex flex-col flex-[1_0_0] items-center gap-6">
        <div
          className={`${
            isMenuOpen ? "flex items-start p-3 gap-[12px]" : "p-3"
          } `}
        >
          <div className="w-[39px] h-[39px]" onClick={toggleMenuHandler}>
            <img
              src={profileImg}
              className="w-full h-full rounded-md"
              alt="profile-picture"
            />
          </div>
          <div
            className={`flex flex-col justify-center items-start gap-1 ${
              isMenuOpen ? "" : "hidden"
            }`}
          >
            <div className="w-[108px]">
              <h4 className="text-white font-medium text-[15px] leading-[22px]">
                Mayank
              </h4>
              <span className="text-[#cbcfd3] font-normal text-[13px] underline cursor-pointer">
                Vist Store
              </span>
            </div>
          </div>
          <div className={`${isMenuOpen ? "w-[20px] h-[20px]" : "hidden"} `}>
            <img
              className={`${isMenuOpen ? "" : ""}`}
              src={downArrowLogo}
              alt="logo"
            />
          </div>
        </div>
        <div
          className={`flex flex-col items-start gap-1 ${
            isMenuOpen ? "w-52" : "w-18"
          }`}
        >
          {sidebarItems.map((item, i) => {
            return (
              <div
                className={`hover:bg-[#ffffff1a] ${
                  isMenuOpen
                    ? "flex items-start gap-[12px] px-3 py-2 rounded w-full"
                    : "py-2"
                } `}
                key={i}
              >
                <div className={`w-5 h-5 ${isMenuOpen ? "" : "mx-auto"}`}>
                  <img src={item.icon} alt="icon" />
                </div>
                <span
                  className={`text-[#ffffff] text-sm font-medium opacity-80 ${
                    isMenuOpen ? "" : "hidden"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`${
          isMenuOpen
            ? "flex flex-col items-start gap-2.5 w-48 py-1.5 px-3 rounded bg-[#353C53] "
            : "hidden"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-start gap-2.5 p-1.5 rounded bg-[#ffffff1a]">
            <img src={walletIcon} alt="icon" />
          </div>
          <div className="flex flex-col items-start gap-0.5">
            <p className="text-[13px] text-white font-normal opacity-80">
              Available credits
            </p>
            <span className="text-base font-medium text-white">222.10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
