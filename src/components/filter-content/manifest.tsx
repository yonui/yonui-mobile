import { FieldTypes, EditTypes, ComponentManifest, UITable } from 'libraui-extension'
const manifest: ComponentManifest = {
  name: 'filtercontent',
  label: '筛选组件内容',
  description: '筛选组件的内容',
  uiTable: UITable.BillItemBase,
  type: 'DataEntry',
  props: [
    {
      name: 'title',
      type: FieldTypes.string,
      defaultValue: 'title',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '标题'
      }
    },
    {
      name: 'selectData',
      type: FieldTypes.array,
      defaultValue: JSON.stringify([{ value: 'item1', desc: 'item1' }, { value: 'item2', desc: 'item2' }]),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: true,
        props: {},
        label: '选择区域的数据'
      }
    },
    {
      name: 'selectedValue',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '选中数据值'
      }
    },
    {
      name: 'onSelect',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '选中数据时的回调'
      }
    },
    {
      name: 'extraInput',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '自定义渲染的标题'
      }
    },
    {
      name: 'extraInputType',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options:
            [
              { value: 'text', text: '文本' },
              { value: 'calendar', text: '日历' }
            ]
        },
        label: '自定义渲染的类型'
      }
    }
  ],
  children: []
}

export default manifest
