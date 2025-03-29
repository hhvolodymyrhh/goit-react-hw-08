import css from "./AppBar.module.css";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from "react-redux";

function AppBar() {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
      
     <header className={css.wrapper}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
    
  );
}

export default AppBar;