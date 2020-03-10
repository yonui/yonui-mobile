/**
 * @name: NavBar
 * @description: 顶部导航栏
 */
import React, { Component } from 'react'
import NavBar from '../index'
import Tab from '../../tab'
import WhiteSpace from '../../white-space'
import { Icon } from 'antd-mobile'

// import Icon from "../../icon";
import '../style'
import './demo.less'

const fixedTabs1 = [
  { title: '聊天', key: '1-1' },
  { title: '文件', key: '1-2' }
]
export default class Demo extends Component {
  render () {
    return (
      <div>
        <NavBar
          onLeftClick={() => console.log('onLeftClick')}
          subTitle='副标题副标题副标题副标题副标题'
          rightIcon1="ellipsis"
        >

        </NavBar>
        <WhiteSpace />

        <NavBar
          onLeftClick={() => console.log('onLeftClick')}
          title="此处是最多标题文本示意…"
          rightIcon1="ellipsis"
        >
        </NavBar>
        <WhiteSpace />
        <NavBar
          rightIcon1="search"
          rightIcon2="ellipsis"
          onLeftClick={() => console.log('onLeftClick')}
        >
          <button>sssss</button>
        </NavBar>

        <WhiteSpace />
        <NavBar
          titleIcon="down"
          rightIcon1="search"
          rightIcon2="ellipsis"
          onLeftClick={() => console.log('onLeftClick')}
        />
        <WhiteSpace />
        <NavBar
          mode='dark'
          onLeftClick={() => console.log('onLeftClick')}
          rightIcon1="ellipsis"
        />
      </div>
    )
  }
}
