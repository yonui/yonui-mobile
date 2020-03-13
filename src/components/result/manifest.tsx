import { EditTypes, FieldTypes, ComponentManifest, UITable } from 'libraui-extension'

const manifest: ComponentManifest = {
  name: 'result',
  label: '反馈页',
  type: 'Combination',
  uiTable: UITable.BillItemBase,
  props: [
    {
      name: 'mode',
      type: FieldTypes.string,
      showDesign: true,
      defaultValue: 'success',
      designConfig: {
        label: '模式',
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: 'success', text: '成功' },
            { value: 'wait', text: '等待' },
            { value: 'reject', text: '驳回' }
          ]
        }
      }
    },
    {
      name: 'message',
      type: FieldTypes.string,
      defaultValue: '申请成功',
      showDesign: true,
      designConfig: {
        label: '文字信息',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    }]
}

export default manifest
