import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'

const manifest: ComponentManifest = {
  name: 'Button',
  label: '按钮',
  type: 'basicControls',
  icon: 'anniu',
  uiObject: UIObject.Controls,
  props: [
    {
      name: 'content',
      type: FieldTypes.string,
      defaultValue: 'Button',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '按钮文本'
      }
    },
    {
      name: 'type',
      type: FieldTypes.string,
      defaultValue: 'default',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [{
            value: 'default',
            text: '默认'
          },
          {
            value: 'primary',
            text: '主按钮'
          },
          {
            value: 'warning',
            text: '警告红'
          },
          {
            value: 'ghost',
            text: '透明'
          },
          {
            value: 'text',
            text: '文本'
          }
          ]
        },
        label: '按钮类型'
      }
    },
    {
      name: 'size',
      type: FieldTypes.string,
      defaultValue: 'large',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [{
            value: 'large',
            text: '大'
          },
          {
            value: 'small',
            text: '小'
          }
          ]
        },
        label: '按钮大小'
      }
    },
    {
      name: 'inline',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '行内按钮',
        help: '大小为大时有效'
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
      name: 'loading',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '载入状态'
      }
    },
    {
      name: 'icon',
      type: FieldTypes.string,
      defaultValue: false, // 改成false才是默认没有svg
      showDesign: true,
      designConfig: {
        // type: EditTypes.Icon,
        isRequired: false,
        // props: {},
        label: '图标',
        type: EditTypes.IframeModal,
        props: {
          caption: '图标库',
          addText: '添加图标',
          editText: '更换图标',
          iframeUrl: '/IconSelect',
          iframeId: 'iconSelectIframe',
          message: true,
          footer: true
        }
      }
    }
    // ,
    // {
    //   name: 'onClick',
    //   type: FieldTypes.action,
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     isRequired: false,
    //     props: {},
    //     label: '点击事件'
    //   }
    // }
  ],
  children: () => true
}
export default manifest
