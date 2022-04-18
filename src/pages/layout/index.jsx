import React, { Fragment } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

import './index.scss'
import { Link, useRoutes } from 'react-router-dom';
import { dynamicRoutingArray } from '../../router';


const MenuRout = () => {
  //根据路由表生成对应的路由规则
  const menuElement = useRoutes(dynamicRoutingArray)
  return menuElement
}

export default function MyLayout () {
  const [collapsed, setCollapsed] = React.useState(false)


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
                dynamicRoutingArray.map(item => {
                  if (item.isLayout === true) {
                    return <Menu.Item key={item.path} >
                      <Link to={item.path}>
                        {item.title}
                      </Link>
                    </Menu.Item>
                  }
                })
              }
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
              <MenuRout />
              {/* <Outlet /> */}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </Layout>
    </Fragment >
  )
}
