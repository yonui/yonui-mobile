import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest, UITable } from 'libraui-extension'
const manifest: ComponentManifest = {
  name: 'Loading',
  label: '加载',
  description: '渲染加载状态',
  uiTable: UITable.BillTplGroupBase,
  type: 'DataDisplay',
  props: [
    {
      name: 'show',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否显示'
      }
    },
    {
      name: 'content',
      type: FieldTypes.string,
      defaultValue: '加载中',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '文字内容'
      }
    },
    {
      name: 'type',
      type: FieldTypes.string,
      defaultValue: 'toast',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options:
            [
              { value: 'toast', text: '模态加载' },
              { value: 'jump', text: '跳转加载' },
              { value: 'local', text: '局部加载' }
            ]
        },
        label: '类型'
      }
    },
    {
      name: 'inline',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '行内模式',
        help: '对跳转加载有效'
      }
    },
    {
      name: 'percent',
      type: FieldTypes.number,
      defaultValue: 50,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '跳转百分比',
        help: '对跳转加载有效'
      }
    },
    {
      name: 'size',
      type: FieldTypes.string,
      defaultValue: 'small',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options:
            [
              { value: 'small', text: '小' },
              { value: 'large', text: '大' }
            ]
        },
        label: '图标大小',
        help: '对局部加载有效'
      }
    },
    {
      name: 'theme',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options:
            [
              { value: '', text: '默认' },
              { value: 'primary', text: '主题色' },
              { value: 'dark', text: '深色' },
              { value: 'light', text: '浅色' }
            ]
        },
        label: '主题'
      }
    }
  ],
  children: []
}

export {
  manifest,
  ReactWrapper
}
