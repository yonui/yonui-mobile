import { FieldTypes, EditTypes, ReactWrapper } from 'libraui-extension'
// todo 未配置 onClick onChange
const manifest = {
  name: 'Switch',
  label: '滑动开关',
  description: '',
  type: 'DataEntry',
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
        label: '是否默认选中'
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
        label: '设置禁用'
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
      name: 'label',
      type: FieldTypes.string,
      defaultValue: '开关',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '标题文本'
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
      showDesign: true,
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
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onChange'
      }
    }
  ],
  children: []
}

// todo 未配置 onChange
const manifestRaidoItem = {
  name: 'RadioItem',
  label: '单选项',
  description: '',
  type: 'DataEntry',
  props: [
    {
      name: 'name',
      type: FieldTypes.child,
      defaultValue: '选项1',
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: '名称'
      }
    },
    {
      name: 'defaultChecked',
      type: FieldTypes.boolean,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '初始值'
      }
    },
    {
      name: 'checked',
      type: FieldTypes.boolean,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '是否选中'
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
        label: '是否禁用'
      }
    },
    {
      name: 'onChange',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'onChange'
      }
    }
  ],
  children: []
}

export {manifest,manifestRaidoItem,ReactWrapper}