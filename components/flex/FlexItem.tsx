import * as React from 'react'
import { Component, ReactWrapper, ComponentManifest } from '@libraui/extension'

import { Flex } from 'antd-mobile'
import { FlexItemPropsType } from 'antd-mobile/lib/flex/PropsType'

const FlexItem = Flex.Item

const manifest: ComponentManifest = {
  name: 'FlexItem',
  label: 'FlexItem',
  description: '实现css flex布局', // 描述
  type: 'Layout',
  props: [// adapter适配层数据
  ],
  children: ['Button', 'Calendar', 'Card', 'Checkbox', 'Drawer', 'Flex', 'NavBar', 'Progress', 'Stepper', 'Switch', 'WhiteSpace', 'WingBlank']
}
export default class metaFlexItem implements Component<FlexItemPropsType> {
  manifest = manifest
  render = ReactWrapper((props: any) => <FlexItem > {props.children}</FlexItem>, { manifest })
}
