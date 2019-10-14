//layout布局组件
import React, { Component } from 'react'

import { Layout, Menu } from 'antd'

const { Header, Content } = Layout
// 数据
const menuData = [
  { title: '中国美食简介', hash: 'home', id: '1' },
  {title:'北京烤鸭',hash:'list',id:'2'},
  { title: '东坡肉', hash: 'happy', id: '3' },
  { title: '麻婆豆腐', hash: 'talk', id: '4' }
]
export default class LayOut extends Component {
  constructor() {
    super()
  }

  render() {
    // 解构属性传值
    const { gethash, id } = this.props
    console.log(id)
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            {/* 导航部分  */}
            {menuData.map((item, index) => (
              <Menu.Item
                key={item.id}
                onClick={() => gethash(item.hash, item.id)}
              >
                {item.title}
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Layout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              {/* 插槽的内容 */}
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
