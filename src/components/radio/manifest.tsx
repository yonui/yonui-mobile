import { FieldTypes, EditTypes, UITable, ComponentManifest } from 'libraui-extension'
// todo 未配置 onClick onChange
const manifest: ComponentManifest = {
  name: 'Radio',
  label: '单选',
  description: '',
  type: 'DataEntry',
  uiTable: UITable.BillItemBase,
  props: [
    {
      name: 'name',
      type: FieldTypes.child,
      defaultValue: '选项1',
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: '选项描述'
      }
    },
    // {
    //   name: 'defaultChecked',
    //   type: FieldTypes.boolean,
    //   defaultValue:true,
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Bool,
    //     isRequired: true,
    //     props: {},
    //     label: '初始值'
    //   }
    // },
    {
      name: 'checked',
      type: FieldTypes.boolean,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '是否选中'
      }
    },
    {
      name: 'disabled',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '是否禁用'
      }
    },
    {
      name: 'onChange',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'onChange'
      }
    }
    // {
    //   name: 'mode',
    //   type: FieldTypes.string,
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Select,
    //     isRequired: true,
    //     props: {
    //       options: [
    //         { value: '', text: '默认' },
    //         { value: 'circle', text: 'circle' },
    //       ]
    //     },
    //     label: 'raido类型'
    //   }
    // }
  ],
  children: []
}

export default manifest
