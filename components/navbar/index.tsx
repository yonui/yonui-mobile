import * as React from 'react'
import { Component, EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'

import { NavBar } from 'antd-mobile'
import { NavBarProps } from 'antd-mobile/lib/nav-bar/PropsType'

const manifest: ComponentManifest = {
  name: 'NavBar',
  label: '导航栏',
  description: '位于 app 内容区的上方，系统状态栏的下方，并且提供在一系列页面中的导航能力。', // 描述
  props: [// adapter适配层数据
    {
      name: 'mode',
      type: FieldTypes.string,
      defaultValue: 'dark',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'dark', text: 'dark' },
              { value: 'light', text: 'light' }
            ]
        },
        label: '模式',
        help: '模式'
      }
    },
    {
      name: 'icon',
      type: FieldTypes.child,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '最左边图标',
        help: '出现在最左边的图标占位符'
      }
    },
    {
      name: 'leftContent',
      type: FieldTypes.string,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '导航左边内容',
        help: '导航左边内容'
      }
    },
    {
      name: 'rightContent',
      type: FieldTypes.string,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '导航右边内容',
        help: '导航右边内容'
      }
    },
    {
      name: 'onLeftClick',
      type: FieldTypes.action,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '左边回调',
        help: '导航左边点击回调'
      }
    }

  ],
  children: ['Button', 'Card', 'Progress', 'WingBlank']// 可放置哪些子组件,暂时只支持数组,不支持方法
}
export default class MetaNavBar implements Component<NavBarProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => (<NavBar {...props}>{props.children}</NavBar>))
}
