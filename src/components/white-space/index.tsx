import { EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'

import { WhiteSpace } from 'antd-mobile'
const manifest: ComponentManifest = {
  name: 'WhiteSpace',
  label: '上下留白',
  description: '上下留白', // 描述
  type: 'Layout',
  props: [// adapter适配层数据
    {
      name: 'size',
      type: FieldTypes.string,
      defaultValue: 'md',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'xs', text: 'xs' },
              { value: 'sm', text: 'sm' },
              { value: 'md', text: 'md' },
              { value: 'lg', text: 'lg' },
              { value: 'xl', text: 'xl' }
            ]
        },
        label: '上下留白',
        help: '上下留白的间距'
      }
    }
  ],
  children: []
}

export default ReactWrapper(WhiteSpace, manifest)
