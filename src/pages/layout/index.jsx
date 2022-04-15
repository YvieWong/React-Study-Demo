import React, { Fragment } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

import './index.scss'
import { Link, Outlet } from 'react-router-dom';
import router from '../../router';

export default function MyLayout () {
  const [collapsed, setCollapsed] = React.useState(false)
  const template = router[0].children
  const menu = template.filter(item => { return item.isLayout })
  console.log(menu);

  function onCollapse (collapsed) {
    console.log(collapsed);
    setCollapsed(collapsed)
  }
  return (
    <Fragment>
      <Layout>
        <Header className="header">
          <div className="logo" >披萨经营小店</div>
        </Header>
        <Layout>
          <Sider
            collapsible
            breakpoint="lg"
            collapsedWidth="80"
            collapsed={collapsed}
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={onCollapse}
          >
            <div className="logo" />
            <Menu mode="inline" defaultSelectedKeys={['4']}>
              {
                menu.map(item => {
                  return <Menu.Item key={item.path}>
                    <Link to={item.path}>
                      {item.title}
                    </Link>
                  </Menu.Item>
                })
              }
              {/* <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
              </Menu.Item>
              <Menu.Item key="2" icon={<LaptopOutlined />}>
                nav 2
              </Menu.Item>
              <Menu.Item key="3" icon={<NotificationOutlined />}>
                nav 3
              </Menu.Item> */}
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Outlet />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </Layout>
    </Fragment >
  )
}
