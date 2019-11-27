/**
 * rc-from是否需要增加,如果增加rc-from,需要写一个from组件
 */
import React from 'react';
import { List, Stepper } from 'antd-mobile';
import { Component, Props, FieldTypes,EditTypes } from '@metaui/extension';
interface StepperProps {
  label: string
  min: number
  max: number
  value: number
  step: number | string
  defaultValue: number
  disabled: boolean
  readOnly: boolean
  showNumber: boolean
  onChange: ()=>void //没配置
}
class CustomStepperComponent extends React.Component<any>{
  render () {
      return (
        <List.Item extra={<Stepper {...this.props}/>}>
          {this.props.label}           
        </List.Item>
      );
  }
}
export class StepperComponent implements Component<StepperProps>  {
    manifest = {
      name: 'Stepper',
      label: '步进器',
      description: '',
      props: [
        {
          name: 'label',
          type: FieldTypes.string,
          defaultValue: '',
          showDesign: true,
          designConfig: {
            type: EditTypes.Icon,
            isRequired: true,
            props: {},
            label: '标题文本'
          }
        },
        {
            name: 'min',
            type: FieldTypes.number,
            defaultValue: -Infinity,
            showDesign: true,
            designConfig: {
              type: EditTypes.Number,
              isRequired: true,
              props: {},
              label: '最小值'
            }
        },
        {
            name: 'max',
            type: FieldTypes.number,
            defaultValue: Infinity,
            showDesign: true,
            designConfig: {
              type: EditTypes.Number,
              isRequired: true,
              props: {},
              label: '最大值'
            }
        },
        {
            name: 'value',
            type: FieldTypes.number,
            showDesign: true,
            designConfig: {
              type: EditTypes.Number,
              isRequired: true,
              props: {},
              label: '当前值'
            }
        },
        {
            name: 'defaultValue',
            type: FieldTypes.number,
            showDesign: true,
            designConfig: {
              type: EditTypes.Number,
              isRequired: true,
              props: {},
              label: '初始值'
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
              label: '是否禁用'
            }
        },
        {
            name: 'readOnly',
            type: FieldTypes.boolean,
            defaultValue: false,
            showDesign: true,
            designConfig: {
              type: EditTypes.Bool,
              isRequired: true,
              props: {},
              label: '只读'
            }
        },
        {
            name: 'showNumber',
            type: FieldTypes.boolean,
            defaultValue: false,
            showDesign: true,
            designConfig: {
              type: EditTypes.Bool,
              isRequired: true,
              props: {},
              label: '是否显示数值'
            }
        }
      ],
      children: []
    }
  render = (props:any) => <CustomStepperComponent {...props}/>
}