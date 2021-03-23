
import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
// todo 未配置 style activeStyle
const manifest: ComponentManifest = {
  name: 'Icon',
  label: '图标',
  type: 'basicControls',
  icon: 'icon',
  uiObject: UIObject.Controls,
  props: [
    {
      name: 'color',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        label: '颜色',
        type: EditTypes.Color,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'icon',
      type: FieldTypes.string,
      defaultValue: 'icon-right',
      showDesign: true,
      designConfig: {
        label: '图标',
        // type: EditTypes.Icon,
        isRequired: false,
        // props: {},
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
    },
    {
      name: 'size',
      type: FieldTypes.string,
      defaultValue: 'md',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'xxs', text: '最小' },
            { value: 'xs', text: '偏小' },
            { value: 'sm', text: '小' },
            { value: 'md', text: '中等' },
            { value: 'lg', text: '大' }
          ]
        },
        label: '图标大小'
      }
    }
  ],
  propertyMap: {
    icon: 'type'
  }
}

export default manifest
