import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'SegmentedControl',
  label: '分段菜单',
  description: '切换菜单，内容区上下滑动至选中模块吸顶。',
  type: 'basicControls',
  uiObject: UIObject.Controls,
  props: [
    {
      name: 'data',
      type: FieldTypes.array,
      defaultValue: JSON.stringify([{ label: '智能推荐', children: {} }, { label: '采购订单', children: {} }, { label: '采购分析', children: {} }, { label: '固定考勤', children: {} }]),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '菜单数据',
        help: '传入的菜单数据'
      }
    },
    {
      name: 'onClick',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onClick',
        help: '点击每个菜单的回调函数'
      }
    }
  ],
  children: []

}
export default manifest
