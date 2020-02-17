import { EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from 'libraui-extension'

import { WingBlank } from 'antd-mobile'
const manifest: ComponentManifest = {
  name: 'WingBlank',
  label: '两翼留白',
  description: '两翼留白', // 描述
  type: 'Layout',
  props: [// adapter适配层数据
    {
      name: 'size',
      type: FieldTypes.string,
      defaultValue: 'lg',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'sm', text: 'sm' },
              { value: 'md', text: 'md' },
              { value: 'lg', text: 'lg' }
            ]
        },
        label: '两翼留白',
        help: '两翼留白的间距'
      }
    }
  ],
  children: ['Button', 'Calendar', 'Card', 'Checkbox', 'Drawer', 'Flex', 'NavBar', 'Progress', 'Stepper', 'Switch', 'WhiteSpace', 'WingBlank', 'Slider', 'Range']
}

export default ReactWrapper(WingBlank, manifest)
