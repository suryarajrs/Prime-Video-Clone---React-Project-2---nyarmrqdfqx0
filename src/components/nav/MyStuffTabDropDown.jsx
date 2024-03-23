import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeTabDropdown/homeTabDropDown.css";
import { Dropdown, Menu, Space, Typography } from "antd";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const items = [
  {
    key: "1",
    label: "All",
    path: "/Home",
  },
  {
    key: "2",
    label: "Watchlist",
    path: "/myStuff/Watchlist",
  },
  {
    key: "3",
    label: "Rentals",
    path: "/myStuff/Watchlist",
  },

];

const MyStuffTabDropdown = ({ isHover }) => {
  const navigate = useNavigate();

  const handleLinkClick = (item) => {
    if (item.path) {
      navigate(item.path);
    }
  };

  const menu = (
    <Menu style={{  margin: "0px", borderRadius: "0px",right:'10px' }}>
      {items.map((item) => (
        <Menu.Item
          style={{ borderRadius: "0px" ,padding: "20px",}}
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
          <Space>
            My Stuff
            {isHover ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </Space>
        </Typography.Link>
      </Dropdown>

    </>
  );
};

export default MyStuffTabDropdown;
