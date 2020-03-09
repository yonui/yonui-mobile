import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest, UITable } from 'libraui-extension'
const segmentMenuManifest: ComponentManifest = {
  name: 'SegmentMenu',
  label: '分段菜单',
  description: '切换菜单，内容区上下滑动至选中模块吸顶。',
  type: 'Layout',
  uiTable: UITable.BillTplGroupBase,
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
const segmentMenuItemManifest: ComponentManifest = {
  name: 'SegmentMenuItem',
  label: '分段菜单项',
  uiTable: UITable.BillTplGroupBase,
  type: 'Layout',
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

export {
  segmentMenuManifest,
  segmentMenuItemManifest,
  ReactWrapper
}
