import { EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from 'libraui-extension'
const manifest: ComponentManifest = {
  name: 'NavBar',
  label: '导航栏',
  description: '位于 app 内容区的上方，系统状态栏的下方，并且提供在一系列页面中的导航能力。', // 描述
  type: 'Navigation',
  props: [// adapter适配层数据
    {
      name: 'mode',
      type: FieldTypes.string,
      defaultValue: 'dark',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'dark', text: 'dark' },
              { value: 'light', text: 'light' }
            ]
        },
        label: '模式',
        help: '模式'
      }
    },
    {
      name: 'icon',
      type: FieldTypes.child,
      defaultValue: '<img src="https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg" class="spe am-icon am-icon-md" alt="">',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        props: {},
        label: '最左边图标',
        help: '出现在最左边的图标占位符'
      }
    },
    {
      name: 'leftContent',
      type: FieldTypes.child,
      defaultValue: 'left',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        props: {},
        label: '左边内容',
        help: '导航左边内容'
      }
    },
    {
      name: 'rightContent',
      type: FieldTypes.child,
      defaultValue: '右边内容',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        props: {},
        label: '右边内容',
        help: '导航右边内容'
      }
    },
    {
      name: 'onLeftClick',
      type: FieldTypes.action,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: 'onLeftClick',
        help: '导航左边点击回调'
      }
    }

  ],
  children: ['Button', 'Card', 'Progress', 'WingBlank']
}

export {
  manifest,
  ReactWrapper
}
