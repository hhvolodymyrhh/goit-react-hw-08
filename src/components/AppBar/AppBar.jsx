import css from "./AppBar.module.css";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";


function AppBar() {
  return (
    <div>
      
      <Navigation />
      <AuthNav />
      <UserMenu/> 
    </div>
  );
}

export default AppBar;