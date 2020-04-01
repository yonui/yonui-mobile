import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'SegmentMenu',
  label: '分段菜单',
  description: '切换菜单，内容区上下滑动至选中模块吸顶。',
  type: 'basicControls',
  uiObject: UIObject.Containers,
  props: [
    {
      name: 'selectedIndex',
      type: FieldTypes.number,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '默认选中索引',
        help: '菜单选中项的索引'
      }
    },
    {
      name: 'onClick',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onClick',
        help: '点击每个菜单的回调函数'
      }
    }
  ],
  children: ['SegmentMenuItem']
}
export default manifest
