import React from 'react';
import { Card } from 'antd-mobile';
import { Component, Props, FieldTypes,EditTypes, ReactWrapper } from '@metaui/extension';
interface CardProps {
  full: boolean
}
export class CardComponent implements Component<CardProps>  {
    manifest = {
      name: 'Card',
      label: '卡片',
      description: '',
      props: [
        {
          name: 'full',
          type: FieldTypes.boolean,
          defaultValue: false,
          showDesign: true,
          designConfig: {
            type: EditTypes.Bool,
            isRequired: false,
            props: {},
            label: '是否通栏'
          }
        }
      ],
      children: ['CardHeader','CardBody','CardFooter']//应该还可以放别的组件-不知道有哪些
    }
  render = ReactWrapper((props:any) => <Card {...props}>{props.children}</Card>)
}
