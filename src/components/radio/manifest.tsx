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
  label: '选项',
  description: '',
  type: 'basicControls',
  uiObject: UIObject.Controls,
  icon: 'radio',
  props: [
    {
      name: 'mode',
      type: FieldTypes.string,
      defaultValue: 'tag',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            // { value: 'default', text: '默认' },
            { value: 'tag', text: '标签' },
            { value: 'list', text: '列表' }
          ]
        },
        label: '选项展示方式'
      }
    },
    {
      name: 'isMultiple',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {
        },
        label: '多选'
      }
    },
    // {
    //   name: 'lines',
    //   type: FieldTypes.string,
    //   defaultValue: 'multiple',
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Select,
    //     isRequired: false,
    //     props: {
    //       options: [
    //         { value: 'single', text: '单行' },
    //         { value: 'multiple', text: '多行' },
    //         { value: 'multiple-select', text: '多行(支持展开收起)' }
    //       ]
    //     },
    //     label: '选项面板'
    //   }
    // },
    {
      name: 'label',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: false,
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
    // {
    //   name: 'tagSize',
    //   type: FieldTypes.string,
    //   defaultValue: 'default',
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Select,
    //     isRequired: true,
    //     props: {
    //       options: [
    //         { value: 'default', text: '默认' },
    //         { value: 'sm', text: '小尺寸' },
    //         { value: 'md', text: '中尺寸' },
    //         { value: 'lg', text: '大尺寸' }
    //       ]
    //     },
    //     label: '标签大小',
    //     help: '标签展示时有效'
    //   }
    // },
    // {
    //   name: 'labelWidth',
    //   type: FieldTypes.number,
    //   defaultValue: 20,
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Number,
    //     isRequired: true,
    //     props: {},
    //     label: 'label宽度百分比',
    //     help: '单行展示时有效'
    //   }
    // },
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
        label: '选项组样式'
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
        help: '此项为禁用整个选项组'
      }
    },
    {
      name: 'singleLine',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '单行展示'
      }
    },
    {
      name: 'splitLine',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '分割线'
      }
    }
  ],
  children: []
}

export default manifest
