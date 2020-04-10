import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
const btn1 =
{
  key: 'reset',
  value: '重置',
  theme: 'next'
}
const btn2 = {
  key: 'confirm',
  value: '确定',
  theme: 'primary'
}

const manifest: ComponentManifest = {
  name: 'Filter',
  label: '筛选组件',
  description: '提供一个筛选的容器组件',
  uiObject: UIObject.Containers,
  type: 'operationBar',
  icon: 'filter',
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
      type: FieldTypes.object,
      defaultValue: JSON.stringify(btn1),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '左侧按钮'
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
      type: FieldTypes.object,
      defaultValue: JSON.stringify(btn2),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '右侧按钮'
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
      defaultValue: 'button',
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
    }
  ],
  children: ['filtercontent', 'radio']
}

export default manifest
