import { FieldTypes, EditTypes, UITable, ComponentManifest } from 'libraui-extension'
const manifest: ComponentManifest = {
  name: 'Notice',
  label: '提示',
  type: 'basicControls',
  icon: 'title',
  uiTable: UITable.BillItemBase,
  props: [
    {
      name: 'content',
      type: FieldTypes.child,
      defaultValue: 'Notice-content',
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: '内容区'
      }
    },
    {
      name: 'title',
      type: FieldTypes.string,
      defaultValue: 'Title',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '弹框通告标题区'
      }
    },
    {
      name: 'mode',
      type: FieldTypes.string,
      defaultValue: 'light',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: 'closable', text: '关闭' },
            { value: 'link', text: '链接' },
            { value: 'modal', text: '弹框通告' },
            { value: 'pop', text: 'pop公告' },
            { value: 'light', text: '背景白通告' }
          ]
        },
        label: '提示类型'
      }
    },
    {
      name: 'icon',
      type: FieldTypes.child,
      defaultValue: null,
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: '左侧图标'
      }
    },
    {
      name: 'marqueeProps',
      type: FieldTypes.object,
      defaultValue: JSON.stringify({ loop: true, style: {} }),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '循环参数',
        help: 'loop:是否循环；style样式'
      }
    },
    {
      name: 'action',
      type: FieldTypes.child,
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: '右侧内容',
        help: '用于替换操作 icon 的文案，在右侧展示'
      }
    },
    {
      name: 'noticeModalShow',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '弹框展示',
        help: '只有弹框通告才会使用的参数，不传组件内部控制'
      }
    },
    {
      name: 'onClick',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onClick',
        help: '点击关闭或者操作区域的回调函数'
      }
    }
  ]
}
export default manifest
