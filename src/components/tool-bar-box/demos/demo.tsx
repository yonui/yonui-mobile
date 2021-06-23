/**
 * @name: Toolbar
 * @description: 工具栏
 */
import React, { Component } from 'react'
import ToolBar from '../index'
import '../style'
import './demo.less'
import Button from '../../button'
import '../../button/style'
interface valueItem {key?: string, value: string, theme?: string}
const values: valueItem[] = [{ value: '删除' ,key: 'delete', theme: 'next'}, { value: '删除' ,key: 'c', theme: 'primary'}, { value: '发现' }, { value: '故事' }, { value: '其他' }, { value: '更多' }]
const btns = ['批准', '驳回', '批准', '驳回', '批准']
export default class Demo1 extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      selectedIndex: null,
      selectedKey: ''
    }
  }

  onChange = (val: any, index: number) => {
    console.log(val)
    this.setState({
      selectedKey: val.key
    })
  }

  onClickBtn = (val: any, index: number) => {
    console.log(val, index)
  }

  // renderTextToolbars = (values: valueItem[]) => {
  //   return values.map((item, index) => {
  //     return [
  //       <ToolBar values={values.slice(0, index + 1)} onChange={this.onChange}  />,
  //       <br />
  //     ]
  //   })
  // }

  // renderButtonToolbars = (values: valueItem[]) => {
  //   return values.map((item, index) => {
  //     return [
  //       <ToolBar values={values.slice(0, index + 1)} onChange={this.onClickBtn} mode='button'  />,
  //       <br />
  //     ]
  //   })
  // }

  render() {
    return (
      <div>
        {/* {this.renderTextToolbars(values)}
        {this.renderButtonToolbars(values)} */}
        <ToolBar layout='alignright'>
          <Button mode='primary' size='small'>btn1</Button>
          <Button size='small' mode='toolbar-default'>Btn2</Button>
          {/* <Button size='small'>Btn3</Button> */}
          {/* <Button size='small'>Btn1231231234</Button> */}
          {/* <Button size='small'>Btn5</Button> */}
          {/* <Button size='small'>btn1</Button> */}
          {/* <Button size='small'>Btn2</Button>
          <Button size='small'>Btn3</Button>
          <Button size='small'>Btn4</Button>
          <Button size='small'>Btn5</Button> */}
        </ToolBar>
        <ToolBar layout='alignleft' runTime={true}>
          <Button mode='primary' size='small'>btn1</Button>
          <Button size='small' mode='toolbar-default'>Btn2</Button>
          {/* <Button size='small'>Btn3</Button> */}
          {/* <Button size='small'>Btn1231231234</Button> */}
          {/* <Button size='small'>Btn5</Button> */}
          {/* <Button size='small'>btn1</Button> */}
          {/* <Button size='small'>Btn2</Button>
          <Button size='small'>Btn3</Button>
          <Button size='small'>Btn4</Button>
          <Button size='small'>Btn5</Button> */}
        </ToolBar>
      </div>
    )
  }
}
