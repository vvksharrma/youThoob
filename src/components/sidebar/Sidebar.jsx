import React from "react";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import "./sidebar.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/auth.action";
import { Navigate } from "react-router";

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const accessToken = useSelector((state) => state.auth.accessToken);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleLogin = () => {
    Navigate("/auth");
    // dispatch(logout())
  };

  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>

      <li>
        <MdThumbUp size={23} />
        <span>Liked Video</span>
      </li>

      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>

      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I don't Know</span>
      </li>

      <hr />

      {accessToken ? (
        <li onClick={handleLogout}>
          <MdExitToApp size={23} />
          <span>Log Out</span>
        </li>
      ) : (
        <li onClick={handleLogin}>
          <MdExitToApp size={23} />
          <span>Log In</span>
        </li>
      )}

      <hr />
    </nav>
  );
};

export default Sidebar;
