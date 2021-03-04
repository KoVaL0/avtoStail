import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Button, Menu} from "antd";
import {
  AppstoreAddOutlined,
  FileAddOutlined,
  FolderAddOutlined, HistoryOutlined, MenuFoldOutlined, MenuUnfoldOutlined, StarOutlined,
  TableOutlined,
  TagsOutlined,
  ToolOutlined
} from "@ant-design/icons";

const UserNav = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  };
  return (
    <React.Fragment>
      <Button type="primary" onClick={toggleCollapsed} style={{marginBottom: 16}}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        mode="inline"
        inlineCollapsed={collapsed}
      >
        <Menu.Item icon={<HistoryOutlined />}>
          <NavLink to="/user/history">
            История покупок
          </NavLink>
        </Menu.Item>
        <Menu.Item icon={<StarOutlined />}>
          <NavLink to="/user/wishlist">
            Избранные
          </NavLink>
        </Menu.Item>
        <Menu.Item icon={<ToolOutlined/>}>
          <NavLink to="/user/password">
            Изменение пароля
          </NavLink>
        </Menu.Item>
      </Menu>
    </React.Fragment>
  )
};

export default UserNav;
