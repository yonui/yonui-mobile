/**
 * rc-from是否需要增加,如果增加rc-from,需要写一个from组件
 */
import React from 'react';
import { List, Switch } from 'antd-mobile';
import { Component, Props, FieldTypes,EditTypes } from '@metaui/extension';
interface SwitchProps {
  checked: boolean
  disabled: boolean
  onChange: (checked: boolean)=>void //没配置
  color: string
  name: string
  platform: string
  onClick: (checked: boolean)=>void //没配置
}
class CustomSwitchComponent extends React.Component{
  render () {
      return (
        <List.Item
          extra={<Switch {...this.props}/>}
        >Off</List.Item>
      );
  }
}
export class SwitchComponent implements Component<SwitchProps>  {
    manifest = {
      name: 'Switch',
      label: '滑动开关',
      description: '',
      props: [
        {
            name: 'checked',
            type: FieldTypes.boolean,
            defaultValue: false,
            showDesign: true,
            designConfig: {
              type: EditTypes.Bool,
              isRequired: true,
              props: {},
              label: '是否默认选中'
            }
        },
        {
            name: 'disabled',
            type: FieldTypes.boolean,
            defaultValue: false,
            showDesign: true,
            designConfig: {
              type: EditTypes.Bool,
              isRequired: true,
              props: {},
              label: '设置禁用'
            }
        },
        {
            name: 'color',
            type: FieldTypes.string,
            defaultValue: '',
            showDesign: true,
            designConfig: {
              type: EditTypes.Icon,
              isRequired: true,
              props: {},
              label: '开关打开后的颜色'
            }
        },
        {
            name: 'name',
            type: FieldTypes.string,
            defaultValue: '',
            showDesign: true,
            designConfig: {
              type: EditTypes.Icon,
              isRequired: true,
              props: {},
              label: '名称'
            }
        },
        {
            name: 'platform',
            type: FieldTypes.string,
            defaultValue: 'ios',
            showDesign: true,
            designConfig: {
              type: EditTypes.Select,
              isRequired: true,
              props: {
                options: [
                  { value: 'ios', text: '苹果' },
                  { value: "android", text: '安卓' },
                ]
              },
              label: '手机平台'
            }
        }
      ],
      children: []
    }
  render = (props:any) => <CustomSwitchComponent {...props}/>
}