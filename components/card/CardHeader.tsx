import React from 'react'
import { Card } from 'antd-mobile'
import { CardHeaderProps } from 'antd-mobile/lib/card/CardHeader'
import { Component, FieldTypes, EditTypes, ReactWrapper } from '@libraui/extension'
const CardHeader = Card.Header
const manifest = {
  name: 'CardHeader',
  label: '卡片头部',
  description: '',
  type: 'DataDisplay',
  props: [
    {
      name: 'title',
      type: FieldTypes.child,
      defaultValue: 'This is title',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '标题'
      }
    },
    {
      name: 'thumb',
      type: FieldTypes.child,
      defaultValue: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '标题图片'
      }
    },
    {
      name: 'extra',
      type: FieldTypes.child,
      defaultValue: 'this is extra',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '标题辅助内容'
      }
    }
  ]
}

export default class CardHeaderComponent implements Component<CardHeaderProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => <CardHeader {...props}></CardHeader>, { manifest })
}
