import { useEffect } from "react";
import { UserProp } from "../../core-module/models/user-models";
import "./header.component.scss";
import { Outlet, NavLink, useLocation, Navigate, useLoaderData, redirect, useNavigate } from "react-router-dom";

function HeaderComponent() {
  const navigate = useNavigate();
  const userData: UserProp = useLoaderData() as UserProp;

  const logout = () => {
    localStorage.clear();
    navigate("/login");

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
            <p>{userData?.userInfo?.userName}</p>
            <p>Role: {userData?.userInfo?.userAuthority}</p>
          </div>
          <div className="link-block">
            <span className="link" onClick={() => (logout())}>
              Exit
            </span>
          </div>
        </div>
      </header>
      {userData?.isLoggedIn && location.pathname === "/" &&
        <Navigate to="todo" />
      }
      <Outlet />
    </>
  );
}

export default HeaderComponent;