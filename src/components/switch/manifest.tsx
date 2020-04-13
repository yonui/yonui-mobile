import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
// todo 未配置 onClick onChange
const manifest: ComponentManifest = {
  name: 'Switch',
  label: '滑动开关',
  description: '',
  type: 'basicControls',
  uiObject: UIObject.Controls,
  icon: 'radio',
  props: [
    {
      name: 'checked',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '默认值'
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
        label: '禁用'
      }
    },
    {
      name: 'color',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Color,
        isRequired: true,
        props: {},
        label: '开关打开后的颜色'
      }
    },
    {
      name: 'name',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'name属性',
        help: 'dom上添加name属性'
      }
    },
    {
      name: 'title',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '标题文本'
      }
    },
    {
      name: 'platform',
      type: FieldTypes.string,
      defaultValue: 'ios',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'ios', text: '苹果' },
            { value: 'android', text: '安卓' }
          ]
        },
        label: '手机平台'
      }
    },
    {
      name: 'onClick',
      type: FieldTypes.action,
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onClick'
      }
    },
    {
      name: 'onChange',
      type: FieldTypes.action,
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onChange'
      }
    },
    {
      name: 'bIsNull',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '允许为空'
      }
    },
    {
      name: 'bMustSelect',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '是否必传'
      }
    },
    {
      name: 'isExport',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '允许导出'
      }
    },
    {
      name: 'bVmExclude',
      type: FieldTypes.number,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { text: '默认', value: 0 },
            { text: '只存储不显示', value: 1 },
            { text: '只显示不存储', value: 2 }
          ]
        },
        label: '数据形态'
      }
    }
  ],
  children: []
}

export default manifest
