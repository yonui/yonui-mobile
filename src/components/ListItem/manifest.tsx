import { FieldTypes, EditTypes, ComponentManifest, UITable } from 'libraui-extension'

const manifest: ComponentManifest = {
  name: 'ListItem',
  label: '列表Item',
  type: 'basicControls',
  uiTable: UITable.BillTplGroupBase,
  props: [
    {
      name: 'leftThumb',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        label: '左侧图标',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'rightThumb',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        label: '右侧图标',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'title',
      type: FieldTypes.string,
      defaultValue: '标题',
      showDesign: true,
      designConfig: {
        label: '标题',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'titleExtra',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        label: '标题辅助内容',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'briefExtra',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        label: '信息辅助内容',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'arrow',
      type: FieldTypes.string,
      defaultValue: 'empty',
      showDesign: true,
      designConfig: {
        label: '箭头方向',
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: 'horizontal', text: '向右' },
            { value: 'up', text: '向上' },
            { value: 'down', text: '向下' },
            { value: 'empty', text: '不显示' }
          ]
        }
      }
    },
    {
      name: 'singleLine',
      type: FieldTypes.string,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        label: '是否单行显示',
        type: EditTypes.Bool,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'onClick',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '点击事件'
      }
    }
  ],
  children: ['ListItemBrief', 'listitembrief']
}

export default manifest
