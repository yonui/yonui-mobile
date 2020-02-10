import { Badge } from 'antd-mobile'
import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'

// todo 未配置 style activeStyle
const manifest: ComponentManifest = {
  name: 'Badge', // 自定义组件名称
  label: '徽标数', // 自定义组件文本
  description: '图标右上角的红点、数字或者文字。用于告知用户，该区域的状态变化或者待处理任务的数量。', // 描述
  type: 'DataDisplay',
  props: [
    {
      name: 'size',
      type: FieldTypes.string,
      defaultValue: 'small',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'small', text: 'small' },
              { value: 'large', text: 'large' }
            ]
        },
        label: '大小',
        help: '大小'
      }
    },
    {
      name: 'text',
      type: FieldTypes.string,
      defaultValue: 'text',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '展示的数字',
        help: '展示的数字或文案，当为数字时候，大于 overflowCount时显示为 overflowCount，为 0 时隐藏'
      }
    },
    {
      name: 'overflowCount',
      type: FieldTypes.number,
      defaultValue: 99,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        props: {},
        label: '封顶数字值',
        help: '展示封顶的数字值'
      }
    },
    {
      name: 'corner',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '置于角落'
      }
    },
    {
      name: 'dot',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '展示红点',
        help: '不展示数字，只有一个小红点'
      }
    },
    {
      name: 'hot',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '营销样式'
      }
    }
  ],
  children: ['AccordionPanel']

}

export default ReactWrapper(Badge, manifest)
