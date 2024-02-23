import React from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps, MdLogin } from "react-icons/md";
import "./header.scss";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const Header = ({ handleToggleSidebar }) => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  function handleSearch(){
    alert("work in progress")
  }
  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu size={26}"
        onClick={handleToggleSidebar}
      />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header__logo"
        onClick={<Navigate to={'/'}/>}
      />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit" onClick={handleSearch}>
          <AiOutlineSearch />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        {accessToken ? (
          <img className="img" 
          // src={user?.photoURL} 
          alt="avatar" />
        ) : (
          <Link to={'/auth'}>
          <MdLogin size={24}  />
          </Link> 
        )}
      </div>
    </div>
  );
};

export default Header;
