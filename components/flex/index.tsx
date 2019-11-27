import * as React from 'react'
import { Component,Props} from '@metaui/extension'
import { EditTypes, FieldTypes } from '@metaui/extension';
import { Flex } from 'antd-mobile'

interface FlexProps {
  direction:string,
  wrap: string,
  justify:string,
  align:string
  alignContent:string,
}

export default class MetaFlex implements Component<FlexProps> {
  manifest = {
    name: 'Flex',
    label: 'flex布局',
    description: '实现css flex布局',//描述
    props: [//adapter适配层数据
      {
        name: 'direction',
        type: FieldTypes.string,
        defaultValue: '',
        value:'',
        showDesign: true,
        designConfig: {
          type: EditTypes.Select,
          props: {
            options:
            [
              { value: "row", text: 'row' },
              { value: "row-reverse", text: 'row-reverse' },
              { value: "column", text: 'column' },
              { value: "column-reverse", text: 'column-reverse' }
            ]
          },
          label: '项目定位方向',
          help: '项目定位方向'
        },
      },
      {
        name: 'wrap',
        type: FieldTypes.string,
        defaultValue: '',
        value:'',
        showDesign: true,
        designConfig: {
          type: EditTypes.Select,
          props: {
            options:
            [
              { value: "nowrap", text: 'nowrap' },
              { value: "wrap", text: 'wrap' },
              { value: "wrap-reverse", text: 'wrap-reverse' },
            ]
          },
          label: '子元素的换行方式',
          help: '子元素的换行方式'
        },
      },
      {
        name: 'justify',
        type: FieldTypes.string,
        defaultValue: '',
        value:'',
        showDesign: true,
        designConfig: {
          type: EditTypes.Select,
          props: {
            options:
            [
              { value: "start", text: 'start' },
              { value: "end", text: 'end' },
              { value: "between", text: 'between' },
              { value: "center", text: 'center' },
              { value: "around", text: 'around' },
            ]
          },
          label: '子元素在主轴上的对齐方式',
          help: '子元素在主轴上的对齐方式'
        },
      },
      {
        name: 'align',
        type: FieldTypes.string,
        defaultValue: '',
        value:'',
        showDesign: true,
        designConfig: {
          type: EditTypes.Select,
          props: {
            options:
            [
              { value: "start", text: 'start' },
              { value: "end", text: 'end' },
              { value: "center", text: 'center' },
              { value: "baseline", text: 'baseline' },
              { value: "stretch", text: 'stretch' },
            ]
          },
          label: '子元素在交叉轴上的对齐方式',
          help: '子元素在交叉轴上的对齐方式'
        },
      },
      {
        name: 'alignContent',
        type: FieldTypes.string,
        defaultValue: '',
        value:'',
        showDesign: true,
        designConfig: {
          type: EditTypes.Select,
          props: {
            options:
            [
              { value: "start", text: 'start' },
              { value: "end", text: 'end' },
              { value: "between", text: 'between' },
              { value: "center", text: 'center' },
              { value: "around", text: 'around' },
              { value: "strech", text: 'strech' },
            ]
          },
          label: '有多根轴线时的对齐方式',
          help: '有多根轴线时的对齐方式'
        },
      },
    ],
    children: ['Button','Card','Progress','WingBlank'],//可放置哪些子组件,暂时只支持数组,不支持方法
    // parent: ['button']//可放置哪些父组件中,暂时只支持数组,不支持方法
  }

render = (props: any) => (<Flex {...props}></Flex>)
}
