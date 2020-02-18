import { FieldTypes, EditTypes, ComponentManifest } from 'libraui-extension'

const manifest: ComponentManifest = {
  name: 'Search',
  label: '搜索栏',
  type: 'Basic',
  props: [
    {
        name: 'full',
        type: FieldTypes.boolean,
        defaultValue: false,
        showDesign: true,
        designConfig: {
            type: EditTypes.Bool,
            isRequired: false,
            props: {},
            label: '是否通栏'
        }
    },
  ],
  children: []
}

export default manifest