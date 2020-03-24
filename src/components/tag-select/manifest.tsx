import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
const selectData = [{ value: 'value', desc: 'description' }]
const manifest: ComponentManifest = {
  name: 'TagSelect',
  label: '枚举选择',
  type: 'basicControls',
  uiObject: UIObject.Controls,
  icon: 'liebiaoxingshi',
  props: [
    {
      name: 'selectData',
      type: FieldTypes.object,
      defaultValue: JSON.stringify(selectData),
      showDesign: true,
      designConfig: {
        label: '选项数据',
        type: EditTypes.Json,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'selectedValue',
      type: FieldTypes.string,
      defaultValue: 'value',
      showDesign: true,
      designConfig: {
        label: '被选中数据',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'size',
      type: FieldTypes.string,
      defaultValue: 'sm',
      showDesign: true,
      designConfig: {
        label: '尺寸',
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            {
              value: 'default',
              text: '默认'
            },
            {
              value: 'sm',
              text: '小尺寸'
            },
            {
              value: 'lg',
              text: '大尺寸'
            }
          ]
        }
      }
    },
    {
      name: 'onSelect',
      type: FieldTypes.string,
      // defaultValue: '标签',
      showDesign: true,
      designConfig: {
        label: '选中回调',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    }
  ],
  children: []
}

export default manifest
