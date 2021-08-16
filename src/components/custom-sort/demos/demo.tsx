/**
 * @name: CustomSort
 * @description: 自定义排序
 */

import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'

const sortItems = [
  {
    key: '1',
    label: '哈哈哈',
    extraText: '(3)',
    children: [
      {
        key: '1-1',
        label: '嘿嘿',
        extraText: '(13)'
      },
      {
        key: '1-2',
        label: '奥奥',
        extraText: '(23)',
      }
    ]
  },
  {
    key: '2',
    label: '嗯嗯嗯嗯',
    extraText: '(33)'
  },
  {
    key: '3',
    label: '嗯嗯嗯嗯',
    extraText: '(33)'
  },
  {
    key: '4',
    label: '嗯嗯嗯嗯',
    extraText: '(33)'
  },
  {
    key: '5',
    label: '嗯嗯嗯嗯',
    extraText: '(33)'
  },
  {
    key: '6',
    label: '嗯嗯嗯嗯',
    extraText: '(33)'
  },
  {
    key: '7',
    label: '嗯嗯嗯嗯',
    extraText: '(33)'
  },
  {
    key: '8',
    label: '嗯嗯嗯嗯',
    extraText: '(33)'
  },
  {
    key: '9',
    label: '嗯嗯嗯嗯',
    extraText: '(33)'
  }
]

export default class Demo extends Component {
  onSelectItem = (item) => {
    console.log('选择了', item)
  }

  render() {
    return (
      <div className="demo">
        <MyComponent
          initialKey='1'
          sortItems={sortItems}
          selectedColor='red'
          extraTextColor='green'
          modelMarginTop={5}
          onSelectItem={this.onSelectItem}
        />
      </div>
    )
  }
}
