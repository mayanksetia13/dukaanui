import { useSelector } from "react-redux";
import Header from "./Header";
import Container from "../UI/Container";
function Main() {
  const isMenuOpen = useSelector((store) => store.layout.isMenuOpen);
  return (
    <div className={`w-full ${isMenuOpen ? "ml-56" : "ml-20"}`}>
      <Header />
      <Container />
    </div>
  );
}

export default Main;
