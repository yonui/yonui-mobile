/**
 * @name: ToolBar
 * @description: Demo Description
 */
import React, { Component } from 'react'
import ToolBar from '../index'
import '../style'
import './demo.less'
const values = ['删除', '我的项目', '发现', '故事', '其他', '更多']
const btns = ['批准', '驳回','批准', '驳回','批准']
export default class Demo1 extends Component<any, any> {
  constructor (props: any) {
    super(props)

    this.state = {
      selectedIndex: null
    }
  }

  onChange = (val: string, index: number) => {
    console.log(val)
    this.setState({
      selectedIndex: index
    })
  }

  onClickBtn = (val: string, index: number) => {
    console.log(val, index)
  }

  renderTextToolbars = ( values:string[] ) => {
    return values.map( (item, index) => {
      return [
        <ToolBar values={values.slice(0,index+1)} onChange={this.onChange} selectedIndex={this.state.selectedIndex}/>,
        <br />
      ]
    })
  }

  renderButtonToolbars = ( values:string[] ) => {
    return values.map( (item, index) => {
      return [
        <ToolBar values={values.slice(0,index+1)} onChange={this.onClickBtn} mode='button' selectedIndex={this.state.selectedIndex}/>,
        <br />
      ]
    })
  }

  render () {
    return (
      <div>
        {this.renderTextToolbars(values)}
        {this.renderButtonToolbars(btns)}
        <ToolBar values={values.slice(0,2)} onChange={this.onClickBtn} mode='button' selectedIndex={this.state.selectedIndex} btnsType={['next','primary']}/>
      </div>
    )
  }
}
