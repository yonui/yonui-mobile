/**
 * @name: Toolbar
 * @description: 工具栏
 */
import React, { Component } from 'react'
import ToolBar from '../index'
import Button from '../../button'
import '../style'
import './demo.less'
import '../../button/style'
export default class Demo1 extends Component<any, any> {
  render() {
    return (
      <div>
        <ToolBar layout='alignright'>
          <Button mode='primary' size='small'>btn1</Button>
          <Button mode='primary' size='small'>Btn2</Button>
          <Button size='small'>Btn3</Button>
        </ToolBar>

        <ToolBar layout='alignleft' runTime={true}>
          <Button mode='primary' size='small'>btn1</Button>
        </ToolBar>
      </div>
    )
  }
}
