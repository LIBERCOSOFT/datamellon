import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  BarChartOutlined,
  PieChartOutlined,
  LineChartOutlined,
  AreaChartOutlined,
  TableOutlined,
} from '@ant-design/icons'
import 'antd/dist/antd.css'

import Home from './components/Home'
import './App.css'

const { Header, Content, Sider } = Layout

function App() {
  return (
    <>
      <Layout>
        <Sider
          breakpoint='lg'
          theme='light'
          collapsedWidth='0'
          onBreakpoint={(broken) => {
            console.log(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
          }}
        >
          <div className='logo'>
            {' '}
            <h1>Charts</h1>{' '}
          </div>
          <Menu theme='light' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1' icon={<BarChartOutlined />}>
              <Link to='/'>Bar Charts</Link>
            </Menu.Item>
            <Menu.Item key='2' icon={<PieChartOutlined />}>
              <Link to='/pie'>Pie Chart</Link>
            </Menu.Item>
            <Menu.Item key='3' icon={<LineChartOutlined />}>
              <Link to='/cbar'>Composite BarChart</Link>
            </Menu.Item>
            <Menu.Item key='4' icon={<AreaChartOutlined />}>
              <Link to='/time'>Time-Series Chart</Link>
            </Menu.Item>
            <Menu.Item key='5' icon={<TableOutlined />}>
              <Link to='/table'>Table</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className='site-layout-sub-header-background'
            style={{ padding: 0, backgroundColor: '#fff' }}
          >
            <h2>Visual Representations of Sales data from 2014 - 2017</h2>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              className='site-layout-background'
              style={{ padding: 24, minHeight: 360 }}
            >
              <Home />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default App
