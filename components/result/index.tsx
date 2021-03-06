import { EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from 'libraui-extension'

import { Result } from 'antd-mobile'
const manifest: ComponentManifest = {
  name: 'Result',
  label: '结果页',
  description: '在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果。', // 描述
  type: 'Combination',
  props: [// adapter适配层数据
    {
      name: 'imgUrl',
      type: FieldTypes.string, // 备注：这里应该是数组
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '插图url',
        help: '插图url'
      }
    },

    {
      name: 'img',
      type: FieldTypes.child,
      defaultValue: '<img src="https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg" style="width:60px;" className="spe am-icon am-icon-md" alt="" />',
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: '插图元素',
        help: '插图元素 (可以为<img src="" />/<Icon type="" />等), 会覆盖 imgUrl 设置'
      }
    },

    {
      name: 'title',
      type: FieldTypes.child,
      defaultValue: '设计器结果页',
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: 'title',
        help: 'title文案'
      }
    },

    {
      name: 'message',
      type: FieldTypes.child,
      defaultValue: '<div>998.00元 <del>1098元</del></div>',
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: 'message',
        help: 'message 文案'
      }
    },
    {
      name: 'buttonText',
      type: FieldTypes.string,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '按钮文案',
        help: '按钮文案'
      }
    },
    {
      name: 'buttonType',
      type: FieldTypes.string,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: 'button设置',
        help: '请参考 button 的配置'
      }
    },
    {
      name: 'onButtonClick',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '按钮回调',
        help: '按钮回调函数'
      }
    }
  ],
  children: []
}

export default ReactWrapper(Result, manifest)
