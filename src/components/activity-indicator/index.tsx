import { ActivityIndicator } from 'antd-mobile'
import { EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from 'libraui-extension'
const manifest: ComponentManifest = {
  name: 'ActivityIndicator',
  label: '活动指示器',
  type: 'Feedback',
  props: [
    {
      name: 'animating',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        label: '显隐状态',
        type: EditTypes.Bool,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'toast',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        help: 'loading样式类型',
        label: 'loading类型',
        type: EditTypes.Bool,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'text',
      type: FieldTypes.string,
      defaultValue: 'load',
      showDesign: true,
      designConfig: {
        help: 'loading文本',
        label: '文本',
        type: EditTypes.Text,
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
        label: '大小',
        help: 'spinner大小',
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: 'small', text: '小' },
            { value: 'large', text: '大' }
          ]
        }
      }
    }
  ]
}
export default ReactWrapper(ActivityIndicator, manifest)
