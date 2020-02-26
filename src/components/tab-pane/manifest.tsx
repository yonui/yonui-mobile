import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest,UITable } from 'libraui-extension'
const manifest: ComponentManifest = {
  name: 'TabPane',
  label: '标签内容',
  description: 'Tabs组件的子组件',
  uiTable: UITable.BillTplGroupBase,
  type: 'Navigation',
  props: [
    {
      name: 'key',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'key值'
      }
    },
    {
      name: 'height',
      type: FieldTypes.string,
      defaultValue: '100px',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '高度'
      }
    },
    {
      name: 'width',
      type: FieldTypes.string,
      defaultValue: '100%',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '宽度'
      }
    },
    {
      name: 'bgColor',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Color,
        isRequired: false,
        props: {},
        label: '背景色'
      }
    },
  ],
  children: () => true,
}
export {
  manifest,
  ReactWrapper
}
