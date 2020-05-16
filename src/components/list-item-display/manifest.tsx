import { FieldTypes, EditTypes, ComponentManifest, UIObject, TypeProps, SysProps } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'ListItemDisplay',
  label: '单行数据展示',
  type: TypeProps.BasicControls,
  uiObject: UIObject.Controls,
  systemProperties: [SysProps.DATA_FIELD],
  props: [
    {
      name: 'label',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '标题'
      }
    },
    {
      name: 'subLabel',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '副标题'
      }
    },
    {
      name: 'showExtraLabelIcon',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        props: {},
        label: '标题左侧图标'
      }
    },
    {
      name: 'extraIcon',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        label: '右侧图标',
        type: EditTypes.IframeModal,
        props: {
          caption: '图标库',
          addText: '添加图标',
          editText: '更换图标',
          iframeUrl: '/IconSelect?iframeId=extraIcon',
          iframeId: 'iconSelectIframeextraIcon',
          message: true,
          footer: true
        }
      }
    },
    {
      name: 'extraText',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '右侧文本'
      }
    }
  ],
  children: []
}

export default manifest
