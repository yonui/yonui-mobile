import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
// todo 未配置 onClick onChange
const selectData = [
  { value: 'value1', desc: 'item1' },
  { value: 'value2', desc: 'item2' },
  { value: 'value3', desc: 'item3' },
  { value: 'value4', desc: 'item4', disabled: true }
]
const manifest: ComponentManifest = {
  name: 'Radio',
  label: '单选框',
  description: '',
  type: 'basicControls',
  uiObject: UIObject.Controls,
  icon: 'radio',
  props: [
    {
      name: 'mode',
      type: FieldTypes.string,
      defaultValue: 'default',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: 'default', text: '默认' },
            { value: 'tag', text: '标签' },
            { value: 'tag-single', text: '单行标签' },
            { value: 'item', text: '单选列表' }
          ]
        },
        label: '单选类型'
      }
    },
    {
      name: 'label',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'label'
      }
    },
    {
      name: 'dataSource',
      type: FieldTypes.object,
      defaultValue: JSON.stringify(selectData),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: true,
        props: {},
        label: '数据源'
      }
    },
    {
      name: 'checkedValue',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '选中数据值'
      }
    },
    {
      name: 'tagSize',
      type: FieldTypes.string,
      defaultValue: 'default',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'default', text: '默认' },
            { value: 'sm', text: '小尺寸' },
            { value: 'md', text: '中尺寸' },
            { value: 'lg', text: '大尺寸' }
          ]
        },
        label: '标签大小',
        help: '标签、单行标签类型下有效'
      }
    },
    {
      name: 'labelWidth',
      type: FieldTypes.number,
      defaultValue: 10,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: 'label宽度百分比',
        help: '标签类型下有效'
      }
    },
    {
      name: 'labelStyle',
      type: FieldTypes.object,
      defaultValue: JSON.stringify({}),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: true,
        props: {},
        label: 'label样式'
      }
    },
    {
      name: 'itemsStyle',
      type: FieldTypes.object,
      defaultValue: JSON.stringify({}),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: true,
        props: {},
        label: '单选组样式'
      }
    },
    {
      name: 'disabled',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '是否禁用',
        help: '此项为禁用整个单选组'
      }
    }

  ],
  children: []
}

export default manifest
