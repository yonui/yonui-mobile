import { EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'

import { Flex } from 'antd-mobile'

import './index.less'

const manifest: ComponentManifest = {
  name: 'Flex',
  label: 'flex布局',
  type: 'Layout',
  description: '实现css flex布局', // 描述
  props: [// adapter适配层数据
    {
      name: 'direction',
      type: FieldTypes.string,
      defaultValue: 'row',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'row', text: 'row' },
              { value: 'row-reverse', text: 'row-reverse' },
              { value: 'column', text: 'column' },
              { value: 'column-reverse', text: 'column-reverse' }
            ]
        },
        label: '项目定位方向',
        help: '项目定位方向'
      }
    },
    {
      name: 'wrap',
      type: FieldTypes.string,
      defaultValue: 'nowrap',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'nowrap', text: 'nowrap' },
              { value: 'wrap', text: 'wrap' },
              { value: 'wrap-reverse', text: 'wrap-reverse' }
            ]
        },
        label: '换行方式',
        help: '子元素的换行方式'
      }
    },
    {
      name: 'justify',
      type: FieldTypes.string,
      defaultValue: 'start',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'start', text: 'start' },
              { value: 'end', text: 'end' },
              { value: 'between', text: 'between' },
              { value: 'center', text: 'center' },
              { value: 'around', text: 'around' }
            ]
        },
        label: '主轴对齐方式',
        help: '子元素在主轴上的对齐方式'
      }
    },
    {
      name: 'align',
      type: FieldTypes.string,
      defaultValue: 'center',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'start', text: 'start' },
              { value: 'end', text: 'end' },
              { value: 'center', text: 'center' },
              { value: 'baseline', text: 'baseline' },
              { value: 'stretch', text: 'stretch' }
            ]
        },
        label: '交叉轴对齐方式',
        help: '子元素在交叉轴上的对齐方式'
      }
    },
    {
      name: 'alignContent',
      type: FieldTypes.string,
      defaultValue: 'strech',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'start', text: 'start' },
              { value: 'end', text: 'end' },
              { value: 'between', text: 'between' },
              { value: 'center', text: 'center' },
              { value: 'around', text: 'around' },
              { value: 'strech', text: 'strech' }
            ]
        },
        label: '多根轴线对齐方式',
        help: '有多根轴线时的对齐方式'
      }
    }
  ],
  children: () => true,
  parent: (p: ComponentManifest) => p.type === 'Layout'
}

export default ReactWrapper(Flex, manifest)
