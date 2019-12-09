import React from 'react'
import { Accordion } from 'antd-mobile'
import { AccordionProps } from 'antd-mobile/lib/accordion'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'

// todo 未配置 style activeStyle
const manifest: ComponentManifest = {
  name: 'Accordion', // 自定义组件名称
  label: '手风琴', // 自定义组件文本
  description: '可以折叠/展开的内容区域。', // 描述
  type: 'DataDisplay',
  props: [
    {
      name: 'activeKey',
      type: FieldTypes.array,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: true,
        props: {},
        label: '激活的tab',
        help: '当前激活 tab 面板的 key'
      }
    },
    {
      name: 'defaultActiveKey',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '初始化key',
        help: '初始化选中面板的 key'
      }
    },
    {
      name: 'onChange',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '切换面板'
      }
    },
    {
      name: 'accordion',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '手风琴模式'
      }
    },
    {
      name: 'openAnimation',
      type: FieldTypes.object,
      defaultValue: JSON.stringify({}),
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '动画',
        help: '设置自定义切换动画，禁止动画可设为{}'
      }
    }
  ],
  children: ['AccordionPanel']

}
export default class MetaAccordion implements Component<AccordionProps> {
  manifest = manifest
  // render = ReactWrapper((props: any) => <Accordion {...props}><Accordion.Panel header="Title 1">
  //   <List className="my-list">
  //     <List.Item>content 1</List.Item>
  //     <List.Item>content 2</List.Item>
  //     <List.Item>content 3</List.Item>
  //   </List>
  // </Accordion.Panel>
  // <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
  // <Accordion.Panel header="Title 3" className="pad">
  //     text text text text text text text text text text text text text text text
  // </Accordion.Panel></Accordion>, { manifest })
  render = ReactWrapper((props: any) => <Accordion {...props}>{props.children}</Accordion>, { manifest })
}
