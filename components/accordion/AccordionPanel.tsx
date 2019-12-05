import React from 'react'
import { Accordion } from 'antd-mobile'
import { AccordionProps } from 'antd-mobile/lib/accordion'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'

var AccordionPanel = Accordion.Panel
// todo 未配置 style activeStyle
const manifest: ComponentManifest = {
  name: 'AccordionPanel', // 自定义组件名称
  label: '手风琴面板', // 自定义组件文本
  description: '可以折叠/展开的内容区域。', // 描述
  type: 'DataDisplay',
  props: [
    {
      name: 'key',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'key',
        help: '对应 activeKey'
      }
    },
    {
      name: 'header',
      type: FieldTypes.child,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '面板头内容',
        help: '面板头内容 key'
      }
    }
  ],
  children: ['List']
}
export default class MetaAccordionPanel implements Component<AccordionProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => <AccordionPanel {...props}>{props.children || <h1>accordion-chidlren-affix</h1>}</AccordionPanel>, { manifest })
}
