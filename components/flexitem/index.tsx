import * as React from 'react'
import { Component, ComponentManifest, ReactWrapper } from '@metaui/extension'
import FlexItem from 'antd-mobile/lib/flex/FlexItem'
import { FlexItemPropsType } from 'antd-mobile/lib/flex/PropsType'

const manifest: ComponentManifest = {
  name: 'FlexItem',
  label: 'FlexItem',
  description: '实现css flex布局', // 描述
  props: [// adapter适配层数据
  ],
  children: ['Button', 'Calendar', 'Card', 'Checkbox', 'Drawer', 'Flex', 'NavBar', 'Progress', 'Stepper', 'Switch', 'WhiteSpace', 'WingBlank']// 可放置哪些子组件,暂时只支持数组,不支持方法
}
export default class metaFlexItem implements Component<FlexItemPropsType> {
  manifest = manifest
  render = ReactWrapper((props: any) => <FlexItem > {props.children}</FlexItem>)
}
