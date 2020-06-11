import { FieldTypes, EditTypes, ComponentManifest, UIObject, TypeProps } from 'yonui-extension'
const data = [
  { key: '1', text: '修改所有日程' },
  { key: '2', text: '修改将来所有日程' },
  { key: '3', text: '删除日程', delete: true }
]
const manifest: ComponentManifest = {
  name: 'ListPanelPicker',
  uiObject: UIObject.Controls,
  label: '底部弹出菜单',
  description: '底部弹出菜单',
  type: TypeProps.FunctionalControls,
  icon: 'list',
  props: [
    {
      name: 'data',
      type: FieldTypes.array,
      defaultValue: JSON.stringify(data),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '数据',
        help: '传入的列表数据'
      }
    },
    {
      name: 'header',
      type: FieldTypes.string,
      defaultValue: '改日程为重复性日程，请选择您的修改方式',
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: '头部内容',
        help: '传入的列表数据'
      }
    },
    // {
    //   name: 'onClick',
    //   type: FieldTypes.action,
    //   defaultValue: '',
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     isRequired: false,
    //     props: {},
    //     label: 'onClick',
    //     help: '点击每个列表项的回调函数'
    //   }
    // },
    {
      name: 'onClose',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onClose',
        help: '关闭的回调'
      }
    },
    {
      name: 'visible',
      type: FieldTypes.boolean,
      defaultValue: true, // 设计器默认展示，实际默认false
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否显示'
      }
    }
  ]
}
export default manifest
