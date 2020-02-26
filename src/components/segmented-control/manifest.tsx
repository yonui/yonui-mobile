import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from 'libraui-extension';
const manifest: ComponentManifest = {
  name: 'SegmentedControl',
  label: '分段菜单',
  description: '切换菜单，内容区上下滑动至选中模块吸顶。',
  type: 'Navigation',
  props: [
    {
      name: 'data',
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '菜单数据',
        help: '传入的菜单数据'
      }
    },
    {
      name: 'selectedIndex',
      type: FieldTypes.number,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '选中项索引',
        help: '菜单选中项的索引'
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
export {
  manifest,
  ReactWrapper
}
