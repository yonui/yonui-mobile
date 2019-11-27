import React from 'react';
import { Card } from 'antd-mobile';
import { Component, Props, FieldTypes,EditTypes } from '@metaui/extension';
let CardBody = Card.Body;
interface CardBodyProps {
}
export class CardBodyComponent implements Component<CardBodyProps>  {
    manifest = {
      name: 'CardBody',
      label: '卡片内容',
      description: '',
      props: [],
      children: []//不确定可以放哪些组件
    }
  render = (props:any) => <CardBody {...props}>{props.children}</CardBody>
}