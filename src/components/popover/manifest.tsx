
import { ComponentManifest, TypeProps, UIObject, FieldTypes, EditTypes } from 'yonui-extension'

const manifest: ComponentManifest = {
  name: 'Popover',
  label: '气泡',
  type: TypeProps.LayoutContainer,
  uiObject: UIObject.Containers,
  props: [
    {
      name: 'data',
      type: FieldTypes.array,
      defaultValue: JSON.stringify([
        { key: '1', icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', text: '选项' }
      ]),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: 'pop内容',
      }
    }
  ],
  events: [
    {
      name: 'onSelect',
      des: '选中回调函数'
    }
  ],
  transformers: [
    'inherit',
    ['bindEvent', { events: ['onSelect'] }],
  ]
}

export default manifest
