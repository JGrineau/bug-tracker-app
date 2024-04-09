import "./Header.scss";
import { FaTasks } from "react-icons/fa";
import MainMenu from "../MainMenu/MainMenu";

function Header() {
  return (
    <div className="header-container">
      <MainMenu />
    {/* <header>
      
        
        <h1 className="title">
        <FaTasks />   Todo App
        </h1>
     

      <div className="author">by JP Grineau</div>
      
    </header> */}
   
    </div>
  );
}

export default Header;
