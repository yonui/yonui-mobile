/**
 * @name: Filter
 * @description: Demo Description
 */
import React, { Component } from 'react';
import MyComponent from '../index';
import { Button } from 'antd-mobile'
import FilterContent from '../../filter-content'
import '../style';
import '../../filter-content/style'
import './demo.less';

const data = [
        { value: 'item1', desc: '办公用品' },
        { value: 'item2', desc: '办公设备' },
        { value: 'item3', desc: '低值耗材' }
      ];
interface DemoState {
  open: boolean
  title: string
  selectData: Array<{ desc: string, value: string }>
  selectedValue?: string
  selectedValue2?: string
}
export default class Demo1 extends Component<any, DemoState> {
  constructor(props: any) {
    super(props)

    this.state = {
      open: false,
      title: '入库日期',
      selectData: [
        { value: 'today', desc: '今天' },
        { value: 'three-days', desc: '三天内' },
        { value: 'week', desc: '本周' },
        { value: 'month', desc: '本月' },
        { value: 'year', desc: '本年' }
      ],
      selectedValue: '',
      selectedValue2: ''
    }
  }

  onOpenChange = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  onSelect = ( item : any) => {
    console.log(item)
    this.setState({
      selectedValue: item
    })
  }

  onSelect2 = ( item : any) => {
    console.log(item)
    this.setState({
      selectedValue2: item
    })
  }

  reset = () => {
    this.setState({
      selectedValue: '',
      selectedValue2: ''
    })
  }

  confirm = () => {
    console.log("value1: ",this.state.selectedValue,"\nvalue2: ",this.state.selectedValue2)
  }
  render() {
    const { title, open, selectData, selectedValue, selectedValue2} = this.state
    return (
      [<MyComponent open={open} onOpenChange={this.onOpenChange} onBtn1Click={this.reset} onBtn2Click={this.confirm}>
        <FilterContent title={title} selectData={selectData} selectedValue={selectedValue} onSelect={this.onSelect} extraInput='自定义时间' extraInputType='calendar'/>
        <FilterContent title='存货分类' selectData={data} selectedValue={selectedValue2} onSelect={this.onSelect2} extraInput='自定义文本' extraInputType='text'/>
        <FilterContent title='存货分类' selectData={data} selectedValue={selectedValue2} onSelect={this.onSelect2} extraInput='自定义文本' extraInputType='text'/>

        <FilterContent title='存货分类' selectData={data} selectedValue={selectedValue2} onSelect={this.onSelect2} extraInput='自定义文本' extraInputType='text'/>

      </MyComponent>,
      <Button onClick={this.onOpenChange}>Click</Button>]
    )
  }
}
