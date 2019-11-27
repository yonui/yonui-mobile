import * as React from 'react'
import { Component,Props} from '@metaui/extension'
import { MetaTypes } from '@metaui/extension/lib/types/meta';
import { Flex } from 'antd-mobile'

interface FlexProps {
  direction:string,
  wrap: string,
  justify:string,
  align:string
  alignContent:string,
}

export default class MetaFlex implements Component {
 
  manifest = {
    name: 'Flex',
    label: 'flex布局',
    description: '实现css flex布局',//描述
    props: [//adapter适配层数据
      {
        name: 'code', //字段名称
        type: String, //字段类型
        defaultValue: '', //字段默认值
        value:'',//字段的值
        showDesign: true, //是否展示在适配层
        designConfig: { //当时showDesign值为true需要此字段
          type: MetaTypes.Text,// 适配层的可选视图类型(枚举项)
          isRequired: true,//是否时必填项
          props: {},//和type相关联,当type是MetaTypes的select,refer,IframeModal等需要添加props
          label: '编码',//在适配层页面显示的文本
          labelStyle: JSON.stringify({color: 'red'}),//在适配层页面显示的样式
          help: '这是编码字段'//提示信息
        },
      },{
        name: 'name', //字段名称
        type: String, //字段类型
        defaultValue: '', //字段默认值
        value:'',//字段的值
        showDesign: true, //是否展示在适配层
        designConfig: { //当时showDesign值为true需要此字段
          type: MetaTypes.Text,// 适配层的可选视图类型(枚举项)
          isRequired: false,//是否时必填项
          props: {},//和type相关联,当type是MetaTypes的select,refer,IframeModal等需要添加props
          label: '名称',//在适配层页面显示的文本
        },
      },{
        name: 'direction',
        type: String,
        defaultValue: '',
        value:'',
        showDesign: true,
        designConfig: {
          type: MetaTypes.Select,
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

    ],
    children: ['button'],//可放置哪些子组件,暂时只支持数组,不支持方法
    // parent: ['button']//可放置哪些父组件中,暂时只支持数组,不支持方法
  }

  render = (props: any) => (<Flex {...props} />)
}
