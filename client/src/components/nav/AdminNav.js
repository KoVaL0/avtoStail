import React, {useState} from "react";
import {Menu, Button} from "antd"
import {Link, NavLink} from "react-router-dom";
import {
  AppstoreAddOutlined,
  FileAddOutlined,
  FolderAddOutlined, MenuFoldOutlined, MenuUnfoldOutlined,
  TableOutlined,
  TagsOutlined,
  ToolOutlined
} from "@ant-design/icons";

const AdminNav = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  };
  return (
    <div>
      <Button type="primary" onClick={toggleCollapsed} style={{marginBottom: 16}}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        mode="inline"
        inlineCollapsed={collapsed}
      >
        <Menu.Item icon={<FileAddOutlined/>}>
          <NavLink to="/admin/product">
            Добавить товар
          </NavLink>
        </Menu.Item>
        <Menu.Item icon={<TableOutlined/>}>
          <NavLink to="/admin/products">
            Показать товары
          </NavLink>
        </Menu.Item>

        <Menu.Item icon={<FolderAddOutlined/>}>
          <NavLink to="/admin/category">
            Категории
          </NavLink>
        </Menu.Item>

        <Menu.Item icon={<AppstoreAddOutlined/>}>
          <NavLink to="/admin/sub">
            Подкатегории
          </NavLink>
        </Menu.Item>

        <Menu.Item icon={<TagsOutlined/>}>
          <NavLink to="/admin/coupon">
            Купоны
          </NavLink>
        </Menu.Item>

        <Menu.Item icon={<ToolOutlined/>}>
          <NavLink to="/user/password">
            Изменить пароль
          </NavLink>
        </Menu.Item>
      </Menu>
    </div>
  )
};

export default AdminNav;
