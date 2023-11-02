import React, { useState } from "react";
import { FileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Quản lý người dùng", "quan-ly-nguoi-dung"),
    getItem("Thêm người dùng", "them-nguoi-dung"),
  ]),
  getItem("Khoá học", "sub2", <TeamOutlined />, [
    getItem("Quản lý khoá học", "quan-ly-khoa-hoc"),
    getItem("Thêm khoá học", "them-khoa-hoc"),
  ]),
];

const AdminTemplate = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          onSelect={({ item, key, keyPath, selectedKeys, domEvent }) => {
            console.log(key);
            navigate(`/admin/${key}`);
          }}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          By Thunder
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminTemplate;
