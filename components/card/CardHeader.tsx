import React from 'react';
import { Card } from 'antd-mobile';
import { Component, Props, FieldTypes,EditTypes } from '@metaui/extension';
let CardHeader = Card.Header;
interface CardHeaderProps {
  title: string,
  thumb: string,
  thumbStyle: object,//未配置
  extra: string
}
export class CardHeaderComponent implements Component<CardHeaderProps>  {
    manifest = {
      name: 'CardHeader',
      label: '卡片头部',
      description: '',
      props: [
        {
          name: 'title',
          type: FieldTypes.string,
          defaultValue: false,
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
            type: FieldTypes.string,
            defaultValue: false,
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
            type: FieldTypes.string,
            defaultValue: false,
            showDesign: true,
            designConfig: {
              type: EditTypes.Text,
              isRequired: false,
              props: {},
              label: '标题辅助内容'
            }
          }
      ],
      children: []
    }
    render = (props:any) => <CardHeader {...props}></CardHeader>
}