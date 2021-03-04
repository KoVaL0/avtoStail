import React, {useEffect, useState} from "react";
import {Spin, Tabs} from 'antd';
import {getCategories} from "../../functions/category";
import "./CategoryTabs.css";
import {getSubs} from "../../functions/sub";
import LoadingOutlined from "@ant-design/icons/lib/icons/LoadingOutlined";
import {DownloadIcon} from "react-modal-image/lib/icons";
import icon from "../../images/icon.svg"

const {TabPane} = Tabs;
const CategoryTabs = (props) => {
  const [categories, setCategories] = useState([]);
  const [sub, setSub] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeKey, setActiveKey] = useState("999");

  useEffect(() => {
    setLoading(true);
    getCategories().then((c) => {
      setCategories(c.data.reverse());
    });
    getSubs().then((c) => {
      setSub(c.data);
      setLoading(false);
    });
  }, []);

  const getSub = (category) => {
    let res = []
    sub.forEach((item) => {
      if (category._id === item.parent) {
        res.push(item)
      }
    })
    return res
  }

  const handlerClickTabs = (id) => {
    if (id !== +activeKey) {
      setActiveKey(id.toString())
    } else setActiveKey("999")
  }

  const showSubCategories = (category) => {
    const res = getSub(category)
    if (res.length > 0) {
      return res.map((item, i) => (
        <div
          className={"sub-categories"}
          style={{cursor: "pointer", padding: "10px 5px"}}
          key={i}
           onClick={() => {
          setActiveKey("999")
          return props.handleSub(item)
        }}>
          {item.name}
        </div>
      ))
    } else return (<p>Нет подкатегорий</p>)
  }

const showCategories = () => (
  categories.map((category, id) => (
    <TabPane
      forceRender={true}
      tab={
        <div className={"tab"} onClick={() => handlerClickTabs(id)}>
          <img className={"tab-icon"} src={category?.images[0]?.url || icon} alt={"icon"}/>
          <p style={{fontSize: "16px", height: "55px"}}>{category.name}</p>
        </div>
      }
      key={id}
    >
      {
        showSubCategories(category)
      }
    </TabPane>
  )));

return (
  <div className="card-container">
  <Tabs
    type="card"
    activeKey={activeKey}
    tabBarGutter={0}
    size={"large"}
    centered={true}
  >
    {loading ? (
      <div>
        <Spin tip="Loading..." indicator={<LoadingOutlined style={{ fontSize: 24 }} spin /> } />
      </div>
    ) : (
      showCategories()
    )}
  </Tabs>
  </div>
)
}

export default CategoryTabs
