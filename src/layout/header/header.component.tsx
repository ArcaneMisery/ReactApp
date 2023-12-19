import { UserProp } from "../../core-module/models/user-models";
import "./header.component.scss";
import { Outlet, NavLink, useLocation, Navigate } from "react-router-dom";

function HeaderComponent(props: { user: UserProp }) {

  const logout = () => {
    localStorage.clear();
    props.user.setIsLoggedIn(false);
  }
  const location = useLocation();
  return (
    <>
      <header>
        <ul className="links-list">
          <li>
            <NavLink to="meme">
              Meme Generator
            </NavLink>
          </li>
          <li>
            <NavLink to="todo">
              TodoList
            </NavLink>
          </li>
          <li>
            <NavLink to="vk-photo">
              Vk photos
            </NavLink>
          </li>
          <li>
            <NavLink to="posts">
              Posts
            </NavLink>
          </li>
        </ul>
        <div className="user-block" >
          <div className="user-info-block">
            <p>{props.user.userInfo?.userName}</p>
            <p>Role: {props.user.userInfo?.userAuthority}</p>
          </div>
          <div className="link-block">
            <span className="link" onClick={() => (logout())}>
              Exit
            </span>
          </div>
        </div>
      </header>
      {props.user.isLoggedIn && location.pathname === "/" &&
        <Navigate to="todo" />
      }
      <Outlet />
    </>
  );
}

export default HeaderComponent;