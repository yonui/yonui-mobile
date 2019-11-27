import React from 'react'
import { Card } from 'antd-mobile'
import { Component, FieldTypes, EditTypes } from '@metaui/extension'
const CardFooter = Card.Footer
interface CardFooterProps {
  content: string
  extra: string
}
export class CardFooterComponent implements Component<CardFooterProps> {
  manifest = {
    name: 'CardFooter',
    label: '卡片底部',
    description: '',
    props: [
      {
        name: 'content',
        type: FieldTypes.string,
        defaultValue: false,
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
        defaultValue: false,
        showDesign: true,
        designConfig: {
          type: EditTypes.Text,
          isRequired: false,
          props: {},
          label: '尾部辅助内容'
        }
      }
    ],
    children: []
  }

  render = (props: any) => <CardFooter {...props}></CardFooter>
}
