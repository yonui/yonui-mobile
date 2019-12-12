import { Steps } from 'antd-mobile'
import { EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
const manifest: ComponentManifest = {
  name: 'Steps',
  label: '步骤条',
  type: 'DataDisplay',
  props: [
    {
      name: 'current',
      type: FieldTypes.number,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        label: '当前步骤',
        type: EditTypes.Number,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'size',
      type: FieldTypes.string,
      defaultValue: 'small',
      showDesign: true,
      designConfig: {
        label: '尺寸',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'status',
      type: FieldTypes.string,
      defaultValue: 'process',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'wait', text: '等待' },
            { value: 'process', text: '进行中' },
            { value: 'finish', text: '结束' },
            { value: 'error', text: '错误' }
          ]
        },
        label: '步骤状态',
        help: '当前步骤的状态'
      }
    },
    {
      name: 'direction',
      type: FieldTypes.string,
      defaultValue: 'vertical',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'horizontal', text: 'horizontal' },
            { value: 'vertical', text: 'vertical' }
          ]
        },
        label: '方向'
      }
    }
  ],
  children: ['Step']
}

export default ReactWrapper(Steps, manifest)
