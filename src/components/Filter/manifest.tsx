import { FieldTypes, EditTypes, ComponentManifest, UITable } from 'libraui-extension'
const manifest: ComponentManifest = {
  name: 'Filter',
  label: '筛选组件',
  description: '提供一个筛选的容器组件',
  uiTable: UITable.BillTplGroupBase,
  type: 'DataEntry',
  props: [
    {
      name: 'open',
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
      name: 'opOpenChange',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'opOpenChange',
        help: 'open状态改变时调用'
      }
    },
    {
      name: 'btn1',
      type: FieldTypes.string,
      defaultValue: '重置',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '左侧按钮名称'
      }
    },
    {
      name: 'onBtn1Click',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '左侧按钮点击事件'
      }
    },
    {
      name: 'btn2',
      type: FieldTypes.string,
      defaultValue: '确定',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '右侧按钮名称'
      }
    },
    {
      name: 'onBtn2Click',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '右侧按钮点击事件'
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
      defaultValue: JSON.stringify(['next', 'primary']),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '按钮类型数组',
        help: 'button模式下有效'
      }
    }
  ],
  children: ['filtercontent']
}

export default manifest
