import { FieldTypes, EditTypes, ComponentManifest, UIObject, TypeProps, SysProps } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'Picture',
  label: '图片',
  type: TypeProps.BasicControls,
  uiObject: UIObject.Controls,
  systemProperties: [SysProps.DATA_FIELD],
  props: [
    {
      name: 'url',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '图片链接'
      }
    },
    {
      name: 'size',
      type: FieldTypes.string,
      defaultValue: 'md',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { text: '小尺寸', value: 'sm' },
            { text: '中尺寸', value: 'md' },
            { text: '大尺寸', value: 'lg' }
          ]
        },
        label: '图片尺寸'
      }
    },
    {
      name: 'borderRadius',
      type: FieldTypes.number,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '圆角大小',
        help: '值为百分比值,最大为50%时图片为圆形'
      }
    },
    {
      name: 'showLabel',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否展示标题'
      }
    },
    {
      name: 'label',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '标题文本'
      }
    },
    {
      name: 'labelStyle',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        label: '标题文本样式',
        type: EditTypes.IframeModal,
        help: '',
        props: {
          caption: '标题文本样式',
          iframeUrl: '/CssSelect?iframeId=labelStyle',
          iframeId: 'mobileCssIframeModallabelStyle',
          iframeContext: 'mobileCssIframeModal',
          addText: '新增样式',
          editText: '修改样式',
          message: true,
          isRequired: false,
          footer: true
        }
      }
    }
  ],
  children: []
}

export default manifest
