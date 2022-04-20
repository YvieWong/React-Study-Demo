import React, { Fragment, useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import './index.scss'
import { Link, useLocation, useRoutes } from 'react-router-dom';
import { dynamicRoutingArray } from '../../router';


const MenuRout = () => {
  //根据路由表生成对应的路由规则
  const menuElement = useRoutes(dynamicRoutingArray)
  return menuElement
}

const MySubMenu = (item) => {
  if (item.isLayout === true) {
    return <SubMenu title={item.title} key={item.path}>
      {
        item.children.map(one => {
          if (one.children && one.children.length > 0) {
            if (item.tempath) {
              one.tempath = item.tempath + '/' + one.path
            } else {
              one.tempath = item.path + '/' + one.path
            }
            return MySubMenu(one)
          } else {
            let parentPath;
            if (item.tempath) {
              parentPath = item.tempath
            } else {
              parentPath = item.path
            }
            return MyMenuItem(one, parentPath)
          }
        })

      }
    </SubMenu>
  }

}

const MyMenuItem = (item, parentPath) => {
  // console.log(parentPath);
  if (item.isLayout === true) {
    return <Menu.Item key={item.path} >
      <Link to={parentPath + '/' + item.path}>
        {item.title}
      </Link>
    </Menu.Item>
  }


}

export default function MyLayout () {
  const pathname = useLocation().pathname

  const [collapsed, setCollapsed] = useState(false)
  const [selected, setSelected] = useState([])
  const [opened, setOpened] = useState([])
  const [breads, setBreads] = useState([])

  useEffect(() => {
    writeBreadcrumb()
    let selectPath = pathname.substring(pathname.lastIndexOf('/') + 1)
    setSelected([selectPath])
    let openedPath = pathname.substring(pathname.indexOf('/', 2) + 1)
    setOpened(openedPath.split('/'))
  }, [pathname])

  useEffect(() => {
    // console.log(breads);
    if (breads.length === 0) {
      let arr = pathname.split('/')
      arr.splice(0, 1)
      matchArray(arr, dynamicRoutingArray)
    }
  }, [breads])


  async function writeBreadcrumb () {
    await setBreads([])
  }

  function matchArray (array, allArr) {
    allArr.map(item => {
      if (array.indexOf(item.path) > 0) {
        setBreads(() => {
          breads.push(item)
          return [...breads]
        })
      }
      if (item.children && item.children.length > 0) {
        matchArray(array, item.children)
      }
    })
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
            // onBreakpoint={broken => {
            //   // console.log(broken);
            // }}
            onCollapse={(collapsed) => {
              setCollapsed(collapsed)
            }}
          >
            {/* <div className="logo" /> */}
            <Menu mode="inline"
              onClick={(e) => {
                setSelected([e.key])
                writeBreadcrumb()
              }}
              defaultOpenKeys={opened}
              openKeys={opened}
              selectedKeys={selected}
              onOpenChange={(openKeys) => {
                setOpened(openKeys);
              }}>
              {
                dynamicRoutingArray.map(item => {
                  if (item.isLayout === true) {
                    if (item.children && item.children.length > 0) {
                      // console.log(item, 'aaa');
                      return MySubMenu(item)
                    } else {
                      return <Menu.Item key={item.path} >
                        <Link to={item.path}>
                          {item.title}
                        </Link>
                      </Menu.Item>
                    }
                  }

                })
              }
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              {/* {console.log(breads)} */}
              {
                breads.map(item => {
                  return <Breadcrumb.Item key={item.path}>{item.title}</Breadcrumb.Item>
                })
              }

              {/* <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item> */}
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
