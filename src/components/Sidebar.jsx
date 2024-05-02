/** @format */

import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = ({ bgColor, color }) => {
  return (
    <>
      <div
        className="side_bar_content"
        style={{
          backgroundColor: `${bgColor}`,
          color: `${color}`,
        }}
      >
        <div className="top_content">
          <div className="items">
            <FaHome className="icons" />
            Home
          </div>
          <div className="items">
            <IoIosNotifications className="icons" />
            Notification
          </div>
          <div className="items">
            <FaCartShopping className="icons" />
            Shop
          </div>
          <div className="items">
            <IoIosChatbubbles className="icons" />
            Conservation
          </div>
          <div className="items">
            <FaWallet className="icons" />
            Wallet
          </div>
          <div className="items">
            <MdSubscriptions className="icons" />
            Subscription
          </div>
          <div className="items">
            <CgProfile className="icons" /> Profile
          </div>
        </div>
        <div className="bottom_content">
          <IoIosLogOut className="icons" />
          Logout
        </div>
      </div>
    </>
  );
};

export default Sidebar;
