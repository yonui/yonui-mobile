import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
const defaultValues = [
  {
    key: 'item1',
    value: '选项1'
  },
  {
    key: 'item2',
    value: '选项2',
    theme: 'primary'
  },
  {
    key: 'item3',
    value: '选项3',
    theme: 'next'
  }
]
const manifest: ComponentManifest = {
  name: 'ToolBars',
  label: '工具栏',
  description: '工具栏',
  uiObject: UIObject.Containers,
  type: 'operationBar',
  icon: 'gongjulan1',
  props: [
    {
      name: 'values',
      type: FieldTypes.array,
      defaultValue: JSON.stringify(defaultValues),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '选项数组'
      }
    },
    {
      name: 'selectedKey',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '选中数据Key值'
      }
    },
    {
      name: 'placement',
      type: FieldTypes.string,
      defaultValue: 'bottomRight',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options:
            [
              { value: 'bottomRight', text: '右下方' },
              { value: 'topRight', text: '右上方' }
            ]
        },
        label: '弹出框位置'
      }
    },
    {
      name: 'mode',
      type: FieldTypes.string,
      defaultValue: 'text',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options:
            [
              { value: 'text', text: '文本' },
              { value: 'button', text: '按钮' }
            ]
        },
        label: '渲染模式'
      }
    },
    {
      name: 'onChange',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '回调函数'
      }
    }
  ],
  children: []
}

export default manifest
