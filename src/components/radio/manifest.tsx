import { FieldTypes, EditTypes, ComponentManifest, UIObject, ExtensionProps } from 'yonui-extension'
// todo 未配置 onClick onChange
const selectData = [
  { value: 'value1', text: '项目1' },
  { value: 'value2', text: '项目2' },
  { value: 'value3', text: '项目3', disabled: true }
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
            { value: 'tag', text: '标签' },
            { value: 'list', text: '列表' }
          ]
        },
        label: '选项展示方式'
      }
    },
    {
      name: 'multiple',
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
      showDesign: false,
      designConfig: {
        type: EditTypes.Json,
        isRequired: true,
        props: {},
        label: '数据源'
      }
    },
    {
      name: 'checkedValue',
      type: FieldTypes.array,
      defaultValue: [],
      showDesign: false,
      designConfig: {
        type: EditTypes.Json,
        isRequired: true,
        props: {},
        label: '选中值'
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
        label: '标题样式'
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
        label: '选项样式'
      }
    }
  ],
  children: [],
  extension: [
    ExtensionProps.disabled,
    ExtensionProps.singleLine,
    ExtensionProps.splitLine,
    ExtensionProps.bIsNull,
    ExtensionProps.bMustSelect,
    ExtensionProps.isExport,
    ExtensionProps.bVmExclude
  ]
}

export default manifest
