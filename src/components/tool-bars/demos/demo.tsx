/**
 * @name: ToolBar
 * @description: Demo Description
 */
import React, { Component } from 'react'
import ToolBar from '../index'
import '../style'
import './demo.less'
const values = ['删除', '我的项目', '发现', '故事', '其他']
const btns = ['批准', '驳回']
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

  render () {
    return (
      <div>
        <ToolBar values={[values[0]]} onChange={this.onChange} selectedIndex={this.state.selectedIndex}/>
        <br />
        <ToolBar values={values} onChange={this.onChange} selectedIndex={this.state.selectedIndex}/>
        <br />
        <ToolBar values={values.concat(['更多'])} onChange={this.onChange} selectedIndex={this.state.selectedIndex}/>
        <br />
        <ToolBar values={btns} onChange={this.onClickBtn} mode='button' btnsType={['default', 'primary']}/>
        <br />
        <ToolBar values={btns.concat(btns)} onChange={this.onClickBtn} mode='button' btnsType={['default', 'default', 'default', 'primary']}/>
        <br />
        <ToolBar values={btns.concat(btns).concat(btns)} onChange={this.onClickBtn} mode='button'/>
        {/* <ToolBar {...props} /> */}
      </div>
    )
  }
}
