import React from "react";
import Navbar from "../navbar/Navbar";
import Searchbar from "../searchbar/Searchbar";
import ChatRoom from "../chatroom/ChatRoom";
import "./style.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Searchbar />
      <ChatRoom />
    </div>
  );
};

export default Sidebar;
