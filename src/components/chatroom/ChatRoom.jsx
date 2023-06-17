import React from "react";
import "./style.scss";

const ChatRoom = () => {
  return (
    <div className="chatRoom">
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="userChatInfo">
          <span>James</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="userChatInfo">
          <span>James</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="userChatInfo">
          <span>James</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
