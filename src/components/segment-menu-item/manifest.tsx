import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'

const manifest: ComponentManifest = {
  name: 'SegmentMenuItem',
  label: '分段菜单项',
  uiObject: UIObject.Containers,
  type: 'basicControls',
  props: [
    {
      name: 'title',
      type: FieldTypes.string,
      defaultValue: '菜单标题',
      showDesign: true,
      designConfig: {
        label: '菜单项标题',
        type: EditTypes.Text,
        isRequired: true,
        props: {}
      }
    },
    {
      name: 'itemIndex',
      type: FieldTypes.number,
      defaultValue: 0,
      showDesign: false,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '菜单项索引',
        help: '该菜单项的索引'
      }
    },
    {
      name: 'data',
      type: FieldTypes.object,
      defaultValue: JSON.stringify({}),
      showDesign: false,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '分段菜单项内容',
        help: '传入的菜单项数据'
      }
    }
  ],
  children: () => true
}

export default manifest
