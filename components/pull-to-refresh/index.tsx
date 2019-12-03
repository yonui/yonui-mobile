import * as React from 'react'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
import { PullToRefresh } from 'antd-mobile'
import { PropsType } from 'rmc-pull-to-refresh/lib/PropsType'
const manifest: ComponentManifest = {
  name: 'PullToRefresh',
  label: '拉动刷新',
  description: '拉动刷新',
  props: [{
    name: 'distanceToRefresh',
    type: FieldTypes.number,
    showDesign: true,
    defaultValue: 25,
    designConfig: {
      type: EditTypes.Number,
      label: '刷新距离',
      props: {}
    }
  },
  {
    name: 'direction',
    type: FieldTypes.string,
    showDesign: true,
    defaultValue: 'down',
    designConfig: {
      type: EditTypes.Number,
      label: '拉动方向',
      props: {
        option: [
          { value: 'up', text: '向上' },
          { value: 'down', text: '向下' }
        ]
      }
    }
  },
  {
    name: 'refreshing',
    type: FieldTypes.boolean,
    showDesign: true,
    defaultValue: false,
    designConfig: {
      type: EditTypes.Bool,
      label: '是否显示刷新状态',
      props: {}
    }
  },
  {
    name: 'onRefresh',
    type: FieldTypes.action,
    showDesign: true,
    designConfig: {
      type: EditTypes.Text,
      label: '刷新回调函数',
      props: {}
    }
  },
  {
    name: 'indicator',
    type: FieldTypes.object,
    showDesign: true,
    designConfig: {
      type: EditTypes.Json,
      label: '指示器配置',
      props: {}
    }
  },
  {
    name: 'damping',
    type: FieldTypes.number,
    showDesign: true,
    defaultValue: 100,
    designConfig: {
      type: EditTypes.Number,
      label: '拉动距离限制',
      props: {}
    }
  }]
}

export default class PullToRefreshComponent implements Component<PropsType> {
  manifest = manifest
  render = ReactWrapper((props: any) => (<PullToRefresh {...props} />))
}
