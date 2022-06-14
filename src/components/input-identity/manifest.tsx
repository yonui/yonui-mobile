import { ComponentManifest, UIObject, TypeProps, FieldTypes, EditTypes } from 'yonui-extension';
import { getFilterProps } from '../list-item-wrapper/manifestProps'

const manifest: ComponentManifest = {
  name: 'InputIdentity',
  label: '证件号',
  type: TypeProps.BasicControls,
  uiObject: UIObject.Controls,
  props: [
    {
      name: 'singleAlignType',
      type: FieldTypes.string,
      defaultValue: 'left',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { text: '左对齐', value: 'left' },
            { text: '单行集中', value: 'center' },
            { text: '右对齐', value: 'right' }
          ]
        },
        label: '单行对齐方式'
      }
    },
    ...getFilterProps(['inputStyle', 'labelStyle'])
  ],
  children: []
}

export default manifest
