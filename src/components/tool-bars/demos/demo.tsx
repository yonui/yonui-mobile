/**
 * @name: ToolBar
 * @description: Demo Description
 */
import React, { Component } from 'react';
import ToolBar from '../index';
import '../style';
import './demo.less';
const values = ['删除','我的项目','发现','故事','其他']
const btns = ['批准','驳回']
const props = {
  key: "nid_1582886544831_2",
  parentKey: "nid_1582886541255_1",
  cName: "工具栏1",
  cControlType: "ToolBar",
  bMain: false,
  iOrder: 9,
  iCols: 1,
  groupId: "nid_1582886544831_2",
  parentId: "nid_1582886541255_1",
  cGroupCode: "ToolBar1582886544831_2",
  cAlign: "top",
  nid: "nid_1582886544831_2",
  uitype: "ToolBar",
  values: `["item1","item2"]`,
  selectedIndex: "",
  placement: "bottomRight",
  mode: "text",
  btnsType: "",
  onChange: ""
}
export default class Demo1 extends Component<any,any> {
  constructor(props: any) {
    super(props)

    this.state = {
      selectedIndex: null
    }
  }

  onChange = ( val: string, index: number) => {
    console.log(val)
    this.setState({
      selectedIndex: index
    })
  }

  onClickBtn = (val: string, index: number) => {
    console.log(val,index)
  }
    render() {
        return (
            <div>
              {/* <ToolBar values={[values[0]]} onChange={this.onChange} selectedIndex={this.state.selectedIndex}/>
              <br />
              <ToolBar values={values} onChange={this.onChange} selectedIndex={this.state.selectedIndex}/>
              <br />
              <ToolBar values={values.concat(['更多'])} onChange={this.onChange} selectedIndex={this.state.selectedIndex}/>
              <br />
              <ToolBar values={btns} onChange={this.onClickBtn} mode='button' btnsType={['default','primary']}/>
              <br />
              <ToolBar values={btns.concat(btns)} onChange={this.onClickBtn} mode='button' btnsType={['default','default','default','primary']}/>
              <br />
              <ToolBar values={btns.concat(btns).concat(btns)} onChange={this.onClickBtn} mode='button'/> */}
              <ToolBar {...props} />
            </div>
        )
    }
}
