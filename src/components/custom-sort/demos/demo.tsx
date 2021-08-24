/**
 * @name: CustomSort
 * @description: 自定义分组
 */

import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'

const sortItems = [
  {
    "key": "1",
    "label": "哈哈哈1",
    "extraText": "(1)",
    "children": [
      {
        "key": "1-1",
        "label": "哈哈哈1-1",
        "extraText": "(2)",
      },
      {
        "key": "1-2",
        "label": "哈哈哈1-2",
        "extraText": "(3)",
      }
    ]
  },
  {
    "key": "2",
    "label": "哈哈哈2",
    "extraText": "(12)",
  },
  {
    "key": "3",
    "label": "哈哈哈3",
    "extraText": "(13)",
  },
  {
    "key": "4",
    "label": "哈哈哈4",
    "extraText": "(14)",
  },
  {
    "key": "5",
    "label": "哈哈哈5",
    "extraText": "(15)",
  },
  {
    "key": "6",
    "label": "哈哈哈6",
    "extraText": "(16)",
  },
  {
    "key": "7",
    "label": "哈哈哈7",
    "extraText": "(17)",
  },
  {
    "key": "8",
    "label": "哈哈哈8",
    "extraText": "(18)",
  },
  {
    "key": "9",
    "label": "哈哈哈9",
    "extraText": "(19)",
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
          data={sortItems}
          selectedColor='red'
          extraTextColor='green'
          modelMarginTop={5}
          onSelectItem={this.onSelectItem}
        />
      </div>
    )
  }
}
