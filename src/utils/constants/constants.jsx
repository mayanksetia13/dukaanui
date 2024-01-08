import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faRectangleList,
  faBorderAll,
  faTruck,
  faBullhorn,
  faChartSimple,
  faMoneyCheck,
  faArrowPointer,
  faPercent,
  faUserGroup,
  faPalette,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

export const sidebarItems = [
  {
    name: "home",
    label: "Home",
    icon: <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff" }} />,
  },
  {
    name: "orders",
    label: "Orders",
    icon: (
      <FontAwesomeIcon icon={faRectangleList} style={{ color: "#ffffff" }} />
    ),
  },
  {
    name: "products",
    label: "Products",
    icon: <FontAwesomeIcon icon={faBorderAll} style={{ color: "#ffffff" }} />,
  },
  {
    name: "delivery",
    label: "Delivery",
    icon: <FontAwesomeIcon icon={faTruck} style={{ color: "#ffffff" }} />,
  },
  {
    name: "marketing",
    label: "Marketing",
    icon: <FontAwesomeIcon icon={faBullhorn} style={{ color: "#ffffff" }} />,
  },
  {
    name: "analytics",
    label: "Analytics",
    icon: <FontAwesomeIcon icon={faChartSimple} style={{ color: "#ffffff" }} />,
  },
  {
    name: "payments",
    label: "Payments",
    icon: <FontAwesomeIcon icon={faMoneyCheck} style={{ color: "#ffffff" }} />,
  },
  {
    name: "tools",
    label: "Tools",
    icon: (
      <FontAwesomeIcon icon={faArrowPointer} style={{ color: "#ffffff" }} />
    ),
  },
  {
    name: "discounts",
    label: "Discounts",
    icon: <FontAwesomeIcon icon={faPercent} style={{ color: "#ffffff" }} />,
  },
  {
    name: "audeince",
    label: "Audeince",
    icon: <FontAwesomeIcon icon={faUserGroup} style={{ color: "#ffffff" }} />,
  },
  {
    name: "appearance",
    label: "Appearance",
    icon: <FontAwesomeIcon icon={faPalette} style={{ color: "#ffffff" }} />,
  },
  {
    name: "plugins",
    label: "Plugins",
    icon: <FontAwesomeIcon icon={faBolt} style={{ color: "#ffffff" }} />,
  },
];
