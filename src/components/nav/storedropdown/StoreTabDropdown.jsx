import React from "react";
import {  useNavigate } from "react-router-dom";
import "./store.css";
import {  Dropdown, Menu,  Typography } from "antd";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const items = [
  {
    key: "1",
    label: "All",
    path: "/Home",
  },
  {
    key: "2",
    label: "Rent",
    path: "/Home/AllMovies",
  },
  {
    key: "3",
    label: "Channels",
    path: "/Home/AllTVShows",
  },
];

const StoreTabDropdown = ({ isHover }) => {


  const navigate = useNavigate();

  const handleLinkClick = (item) => {
    if (item.path) {
      navigate(item.path);

    }
  };

  const menu = (
    <Menu style={{ backgroundColor:'#191e25', margin: "0px", borderRadius: "0px" }}>
      {items.map((item) => (
        <Menu.Item
          style={{ borderRadius: "0px" ,padding:'17px', fontSize:'14px',fontWeight:'800' }}
          className="dropdown-menu-items"
          key={item.key}
          onClick={() => handleLinkClick(item)}
    
        >
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <>
      <Dropdown

        overlay={menu}
        trigger={["hover"]}
      >
        <Typography.Link>
          <div className="home-button" >
            Store {" "}
            {isHover ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </Typography.Link>
      </Dropdown>
    </>
  );
};

export default StoreTabDropdown;
