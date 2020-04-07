import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'

const manifest: ComponentManifest = {
  name: 'Search',
  label: '搜索栏',
  type: 'basicControls',
  uiObject: UIObject.Containers,
  icon: 'sousuo',
  props: [{
    name: 'value',
    type: FieldTypes.string,
    showDesign: true,
    designConfig: {
      type: EditTypes.Text,
      isRequired: true,
      props: {},
      label: '搜索栏当前值'
    }
  },
  {
    name: 'defaultValue',
    type: FieldTypes.string,
    defaultValue: '',
    showDesign: true,
    designConfig: {
      type: EditTypes.Text,
      isRequired: true,
      props: {},
      label: '搜索栏默认值'
    }
  },
  {
    name: 'placeholder',
    type: FieldTypes.string,
    defaultValue: 'placeholder',
    showDesign: true,
    designConfig: {
      type: EditTypes.Text,
      isRequired: true,
      props: {},
      label: '提示文字',
      help: '搜索栏没有值时显示文字'
    }
  },
  {
    name: 'maxLength',
    type: FieldTypes.number,
    showDesign: true,
    designConfig: {
      type: EditTypes.Number,
      isRequired: true,
      props: {},
      label: '最多输入',
      help: '最多输入字符数'
    }
  },
  {
    name: 'disabled',
    type: FieldTypes.boolean,
    showDesign: true,
    designConfig: {
      type: EditTypes.Bool,
      isRequired: false,
      props: {},
      label: '是否禁用'
    }
  },
  {
    name: 'color',
    type: FieldTypes.string,
    defaultValue: '',
    showDesign: true,
    designConfig: {
      type: EditTypes.Color,
      isRequired: false,
      props: {},
      label: '文本颜色'
    }
  },
  {
    name: 'backgroundColor',
    type: FieldTypes.string,
    defaultValue: '',
    showDesign: true,
    designConfig: {
      type: EditTypes.Color,
      isRequired: false,
      props: {},
      label: '背景颜色'
    }
  },
  {
    name: 'searchIconColor',
    type: FieldTypes.string,
    defaultValue: '',
    showDesign: true,
    designConfig: {
      type: EditTypes.Color,
      isRequired: false,
      props: {},
      label: '搜索图标颜色'
    }
  },
  {
    name: 'clearIconColor',
    type: FieldTypes.string,
    defaultValue: '',
    showDesign: true,
    designConfig: {
      type: EditTypes.Color,
      isRequired: false,
      props: {},
      label: '清除图标颜色'
    }
  },
  {
    name: 'voiceIconColor',
    type: FieldTypes.string,
    defaultValue: '',
    showDesign: true,
    designConfig: {
      type: EditTypes.Color,
      isRequired: false,
      props: {},
      label: '语音图标颜色'
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
      label: 'onChange',
      help: 'value值改变事件触发的回调函数'
    }
  },
  {
    name: 'onFocus',
    type: FieldTypes.action,
    showDesign: true,
    designConfig: {
      type: EditTypes.Text,
      isRequired: false,
      props: {},
      label: 'onFocus',
      help: '聚焦事件触发的回调函数'
    }
  },
  {
    name: 'onBlur',
    type: FieldTypes.action,
    showDesign: true,
    designConfig: {
      type: EditTypes.Text,
      isRequired: false,
      props: {},
      label: 'onBlur',
      help: '失焦事件触发的回调函数'
    }
  },
  {
    name: 'onClear',
    type: FieldTypes.action,
    showDesign: true,
    designConfig: {
      type: EditTypes.Text,
      isRequired: false,
      props: {},
      label: 'onClear',
      help: '点击clear图标，回调'
    }
  }
  ]
}

export default manifest
