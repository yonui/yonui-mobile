import { FieldTypes, EditTypes, ComponentManifest, UITable } from 'libraui-extension'
const manifest: ComponentManifest = {
  name: 'Toolbars',
  label: '工具栏',
  description: '工具栏',
  uiTable: UITable.BillTplGroupBase,
  type: 'operationBar',
  props: [
    {
      name: 'values',
      type: FieldTypes.array,
      defaultValue: JSON.stringify(['item1', 'item2', 'item3', 'item4', 'item5', 'item6']),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '选项数组'
      }
    },
    {
      name: 'selectedIndex',
      type: FieldTypes.number,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '选中数据下标'
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
      name: 'btnsType',
      type: FieldTypes.array,
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '按钮类型数组',
        help: 'button模式下有效'
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
    },
    {
      name: 'onValueChange',
      type: FieldTypes.action,
      showDesign: false,
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
