import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { correctAction } from "../modals/modals";
import { NavigationComponentStyled } from "./NavigationComponentStyle";

const NavigationComponent = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(logoutActionCreator());
    Navigate("/login");
    correctAction("Logged out");
  };

  return (
    <NavigationComponentStyled>
      <nav className="top-nav">
        <ul className="menu">
          <li>
            <NavLink to="/home">
              <div className="container-image">
                <img
                  src="https://www.kindpng.com/picc/m/207-2070607_back-to-the-home-page-back-to-home.png"
                  alt="Home page with the list of all players"
                />
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/create">
              <div className="container-image">
                <img
                  src="https://www.vhv.rs/dpng/d/276-2761848_user-plus-user-user-add-profile-avatar-person.png"
                  alt="Create a new player card"
                />
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/login">
              <div className="container-image">
                <button onClick={logOut} className="logOut">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/126/126467.png"
                    alt="Logout to login"
                  />
                </button>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </NavigationComponentStyled>
  );
};

export default NavigationComponent;
