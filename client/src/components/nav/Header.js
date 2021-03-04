import React, {useState} from "react";
import {Menu, Badge, Space} from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined, CarOutlined, PhoneOutlined, HomeOutlined,
} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import firebase from "firebase";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import Search from "../forms/Search";

const {SubMenu, Item} = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
  let {user, cart} = useSelector((state) => ({...state}));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <div className={"header"}>
      <div className={"header__title"}>
        <CarOutlined className={"logo"}/>
        <h3 style={{margin: "0"}}>
          АВТОКРАСКА
        </h3>
      </div>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        className={"menu"}>
        <div className={"nav"}>
          <Item key="home" className={"nav__link"}>
            <NavLink to="/">ГЛАВНАЯ</NavLink>
          </Item>

          <Item key="shop" className={"nav__link"}>
            <NavLink to="/shop">КАТАЛОГ</NavLink>
          </Item>
        </div>
        <Search className={"search"}/>
        <div className={"body"}>
          <div className={"body__items"}>
            {!user && (
              <Item key="register" icon={<UserAddOutlined/>} className={"item"}>
                <NavLink to="/register">Регистрация</NavLink>
              </Item>
            )}
            {!user && (
              <Item key="login" icon={<UserOutlined/>} className={"item"}>
                <NavLink to="/login">Вход</NavLink>
              </Item>
            )}
            <Item key="cart" icon={<ShoppingCartOutlined/>} className={"item"}>
              <NavLink to="/cart">
                <Badge count={cart.length} offset={[9, 0]}>
                  Корзина
                </Badge>
              </NavLink>
            </Item>
            {user && (
              <Menu mode="horizontal" >
                <SubMenu
                  icon={<SettingOutlined/>}
                  title={user.email && user.email.split("@")[0]}
                  className={"item"}
                >
                  {user && user.role === "subscriber" && (
                    <Item>
                      <NavLink to="/user/history">Мой профиль</NavLink>
                    </Item>
                  )}

                  {user && user.role === "admin" && (
                    <Item>
                      <NavLink to="/admin/dashboard">Панель управления</NavLink>
                    </Item>
                  )}

                  <Item icon={<LogoutOutlined/>} onClick={logout}>
                    Выход
                  </Item>
                </SubMenu>
              </Menu>
            )}
          </div>
          <div className={"body__contacts"}>
            <div className={"phone-number"}>
              <PhoneOutlined/>
              +375336785179
            </div>
            <div className={"timetable"}>Пн-Пт 09:00-18:00</div>
          </div>
        </div>
      </Menu>
    </div>

  );
};

export default Header;
