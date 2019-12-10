import React from 'react'
import { Carousel } from 'antd-mobile'
import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'

// todo 未配置 style activeStyle
const manifest: ComponentManifest = {
  name: 'Carousel', // 自定义组件名称
  label: '走马灯', // 自定义组件文本
  description: '走马灯，轮播图。', // 描述
  type: 'DataDisplay',
  props: [
    {
      name: 'className',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '样式名'
      }
    },
    {
      name: 'frameOverflow',
      type: FieldTypes.string,
      defaultValue: 'hidden',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: 'overflow样式',
        help: '设置 slider frame 的 overflow 样式'
      }
    },
    {
      name: 'selectedIndex',
      type: FieldTypes.number,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        props: {},
        label: '当前索引',
        help: '手动设置当前显示的索引'
      }
    },
    {
      name: 'autoplayInterval',
      type: FieldTypes.number,
      defaultValue: 3000,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        props: {},
        label: '切换间隔',
        help: '自动切换的时间间隔'
      }
    },
    {
      name: 'vertical',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '垂直展示'
      }
    },
    {
      name: 'dots',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '展示指示点',
        help: '是否显示面板指示点'
      }
    },
    {
      name: 'autoplay',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '自动切换'
      }
    },
    {
      name: 'infinite',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否循环播放'
      }
    },
    {
      name: 'dotStyle',
      type: FieldTypes.object,
      defaultValue: JSON.stringify({}),
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '指示点样式',
        help: '指示点样式'
      }
    },
    {
      name: 'dotActiveStyle',
      type: FieldTypes.object,
      defaultValue: JSON.stringify({}),
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '激活指示点样式',
        help: '当前激活的指示点样式'
      }
    },
    {
      name: 'cellSpacing',
      type: FieldTypes.number,
      defaultValue: 3000,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        props: {},
        label: '间距',
        help: '项目之间的间距，以px为单位'
      }
    },
    {
      name: 'swipeSpeed',
      type: FieldTypes.number,
      defaultValue: 12,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        props: {},
        label: '滑动灵敏度',
        help: '滑动灵敏度'
      }
    },
    {
      name: 'easing',
      type: FieldTypes.action,
      defaultValue: 'easeOutCircle',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '缓动函数',
        help: '缓动函数，你可以使用这里提供的其他函数'
      }
    },
    {
      name: 'beforeChange',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '切换前回调',
        help: '切换面板前的回调函数'
      }
    }
  ],
  children: []

}
export default ReactWrapper((props: any) => <Carousel {...props}>{props.children}</Carousel>, manifest)
