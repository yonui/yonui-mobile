/**
 * @name: NavBar
 * @description: 顶部导航栏
 */
import React, { Component } from 'react'
import NavBar from '../index'

// import Icon from "../../icon";
import '../style'
import './demo.less'

const fixedTabs1 = [
  { title: '聊天', key: '1-1' },
  { title: '文件', key: '1-2' }
]
export default class Demo extends Component {
  render() {
    return (
      <div>
        <NavBar
          subTitle='副标题副标题副标题副标题副标题'
          rightIcon1="ellipsis"
          onBackClick={() => console.log('onLeftClick')}
        >
        </NavBar>
        <br />
        <NavBar
          title="此处是最多标题文本示意…"
          rightIcon1="ellipsis"
          onBackClick={() => console.log('onLeftClick')}
        >
        </NavBar>
        <br />
        <NavBar
          rightIcon1="search"
          rightIcon2="ellipsis"
          onBackClick={() => console.log('onLeftClick')}
        >
          <button>sssss</button>
        </NavBar>
        <br />
        <NavBar
          titleIcon="down"
          rightIcon1="search"
          rightIcon2="ellipsis"
          onBackClick={() => console.log('onLeftClick')}
        >
        </NavBar>
        <br />
        <NavBar
          mode='dark'
          rightIcon1="ellipsis"
          onBackClick={() => console.log('onLeftClick')}
        >
        </NavBar>
      </div>
    )
  }
}
