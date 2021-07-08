
import { ComponentManifest, UIObject, FieldTypes, EditTypes } from 'yonui-extension'

const manifest: ComponentManifest = {
  name: 'PopoverControl',
  label: '气泡',
  uiObject: UIObject.Controls,
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
