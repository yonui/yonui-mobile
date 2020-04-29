import { FieldTypes, EditTypes, ComponentManifest, UIObject, TypeProps } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'CardBox',
  label: '卡片容器',
  type: TypeProps.DataContainer,
  uiObject: UIObject.Containers,
  icon: 'card',
  props: [
    {
      name: 'displayStyle',
      type: FieldTypes.string,
      defaultValue: 'normal',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: 'normal', text: '正常' },
            { value: 'detail', text: '详情(带头部)' },
            { value: 'slideable', text: '可滑动删除' }
          ]
        },
        label: '展示状态'
      }
    },
    {
      name: 'text',
      type: FieldTypes.string,
      defaultValue: '删除',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '按钮文本',
        help: '滑动删除时有效'
      }
    },
    {
      name: 'rightStyle',
      type: FieldTypes.object,
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '按钮样式',
        help: '滑动删除时有效'
      }
    },
    {
      name: 'label',
      type: FieldTypes.string,
      defaultValue: '明细',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '标题',
        help: '详情态有效'
      }
    },
    {
      name: 'onDelete',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '按钮点击事件',
        help: '滑动删除/详情态有效'
      }
    }
  ],
  children: () => true
}

export default manifest
