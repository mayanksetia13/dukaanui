import { useSelector } from "react-redux";
import Header from "./Header";
function Main() {
  const isMenuOpen = useSelector((store) => store.layout.isMenuOpen);
  return (
    <div className={`w-full ${isMenuOpen ? "ml-60" : "ml-20"}`}>
      <Header />
    </div>
  );
}

export default Main;
