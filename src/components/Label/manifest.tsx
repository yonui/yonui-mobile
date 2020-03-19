import { FieldTypes, EditTypes, ComponentManifest } from 'libraui-extension'
import { getCssSelectParams } from '../_utils'

const manifest: ComponentManifest = {
  name: 'Label',
  label: '标签',
  type: 'basicControls',
  props: [
    {
      name: 'label',
      type: FieldTypes.string,
      defaultValue: '文本',
      showDesign: true,
      designConfig: {
        label: '文本内容',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'style',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: getCssSelectParams({ name: 'style' })
    }
  ]
}
export default manifest
