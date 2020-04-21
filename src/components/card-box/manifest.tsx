import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'CardBox',
  label: '卡片容器',
  type: 'dataContainer',
  uiObject: UIObject.Containers,
  icon: 'card',
  props: [
    {
      name: 'viewStatus',
      type: FieldTypes.string,
      defaultValue: 'default',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: 'default', text: '浏览' },
            { value: 'select', text: '选择-未选中' },
            { value: 'selected', text: '选择-选中' },
            { value: 'detail', text: '详情' }
          ]
        },
        label: '选择状态'
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
        help: '浏览态有效'
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
        help: '浏览态有效'
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
      name: 'footer',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '底部文字',
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
        help: '浏览/详情态有效'
      }
    }
  ],
  children: () => true
}

export default manifest
