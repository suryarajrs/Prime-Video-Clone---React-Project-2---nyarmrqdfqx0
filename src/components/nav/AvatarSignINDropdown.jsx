import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeTabDropdown/HomeTabDropdown.jsx";

import { Dropdown, Menu, Space, Typography } from "antd";


const items = [
  {
    key: "1",
    label: "Sign In",
    path: "/login",
  },  
  {
    key: "2",
    label: "help",
    path: "/comingSoon",
  },
  {
    key: "3",
    label: "Watch Anywhere",
    path: "/comingSoon",
  },
];

const AvatarSignINDropdown = ({ isHover }) => {
  const navigate = useNavigate();

  const handleLinkClick = (item) => {
    if (item.path) {
     
      navigate(item.path);
    }
  };

  const menu = (
    <Menu
      style={{
        height:'190px',
        width:'240px',
        padding: "20px",
        marginTop: "12px",
        borderRadius: "10px",
        position: "absolute",

        right: "-10px",
      }}
    >
      {items.map((item) => (
        <Menu.Item
          style={{
            borderRadius: "20px",
            padding:'15px',
            
          }}
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
            {true ? (
              <img
                src="/avatar.png"
                alt="avatar"
                height={35}
                width={35}
                className="avatar-navitagor"
              />
            ) : null}
          </Space>
        </Typography.Link>
      </Dropdown>
    </>
  );
};

export default AvatarSignINDropdown;
