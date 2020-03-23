import { FieldTypes, EditTypes, UITable, ComponentManifest } from 'libraui-extension'
// todo 未配置 onClick onChange

const manifest: ComponentManifest = {
  name: 'PopoverItem',
  label: '气泡项',
  description: '在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。',
  type: 'Navigation',
  icon: 'cards',
  uiTable: UITable.BillItemBase,
  props: [
    {
      name: 'disabled',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '禁用'
      }
    },
    {
      name: 'label',
      type: FieldTypes.string,
      defaultValue: '气泡项',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '禁用'
      }
    },
    {
      name: 'icon',
      type: FieldTypes.object,
      showDesign: true,
      designConfig: {
        label: '图标',
        isRequired: false,
        type: EditTypes.Textarea,
        props: {}
      }
    },
    {
      name: 'style',
      type: FieldTypes.object,
      showDesign: true,
      designConfig: {
        label: '样式',
        isRequired: false,
        type: EditTypes.Textarea,
        props: {}
      }
    }
  ]
}

export default manifest
