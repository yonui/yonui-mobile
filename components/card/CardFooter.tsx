import React from 'react'
import { Card } from 'antd-mobile'
import { CardFooterProps } from 'antd-mobile/lib/card/CardFooter'
import { Component, FieldTypes, EditTypes, ReactWrapper } from '@libraui/extension'
const CardFooter = Card.Footer
const manifest = {
  name: 'CardFooter',
  label: '卡片底部',
  description: '',
  type: 'DataDisplay',
  props: [
    {
      name: 'content',
      type: FieldTypes.string,
      defaultValue: 'footer content',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '尾部内容'
      }
    },
    {
      name: 'extra',
      type: FieldTypes.string,
      defaultValue: 'extra footer content',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '尾部辅助内容'
      }
    }
  ]
}

export default class CardFooterComponent implements Component<CardFooterProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => <CardFooter {...props}></CardFooter>, { manifest })
}
