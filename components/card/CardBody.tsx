import React from 'react'
import { Card } from 'antd-mobile'
import { CardBodyProps } from 'antd-mobile/lib/card/CardBody'
import { Component, ComponentManifest, ReactWrapper } from '@libraui/extension'
const CardBody = Card.Body
const manifest: ComponentManifest = {
  name: 'CardBody',
  label: '卡片内容',
  description: '',
  type: 'DataDisplay',
  props: [],
  children: ['Button']// 不确定可以放哪些组件
}
export default class CardBodyComponent implements Component<CardBodyProps> {
  manifest = manifest

  render = ReactWrapper((props: any) => <CardBody {...props}>{props.children}</CardBody>, { manifest })
}
