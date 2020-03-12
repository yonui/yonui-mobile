import { EditTypes, FieldTypes, ReactWrapper, ComponentManifest, UITable } from 'libraui-extension'

import { WhiteSpace } from 'antd-mobile'
const manifest: ComponentManifest = {
  name: 'WhiteSpace',
  label: '上下留白',
  description: '上下留白', // 描述
  type: 'Layout',
  uiTable: UITable.BillTplGroupBase,
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
              { value: 'xs', text: '最小' },
              { value: 'sm', text: '偏小' },
              { value: 'md', text: '中等' },
              { value: 'lg', text: '偏大' },
              { value: 'xl', text: '最大' }
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
