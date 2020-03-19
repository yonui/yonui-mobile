import { ListView } from 'antd-mobile'
import { FieldTypes, EditTypes, ComponentManifest, ReactWrapper } from 'libraui-extension'
// import { manifestIndexedList as manifest, ReactWrapper } from './manifest'
const manifest: ComponentManifest = {
  name: 'ListView', // 自定义组件名称
  label: '长列表', // 自定义组件文本
  description: '适用于显示同类的长列表数据类型，对渲染性能有一定的优化效果。', // 描述
  type: 'Combination',
  props: [
    {
      name: 'dataSource',
      type: FieldTypes.object,
      // defaultValue 要求是 ListView.DataSource的实例，暂时无法实现
      defaultValue: JSON.stringify(new ListView.DataSource({ rowHasChanged: () => false })),
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '源数据',
        help: '通过ListViewDataSource初始化的源数据'
      }
    },
    {
      name: 'quickSearchBarTop',
      type: FieldTypes.object,
      defaultValue: JSON.stringify({ value: '#', label: '#' }),
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '回到顶部',
        help: '快捷导航栏最顶部按钮、常用于回到顶部'
      }
    },
    {
      name: 'quickSearchBarStyle',
      type: FieldTypes.object,
      defaultValue: JSON.stringify({}),
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'style',
        help: 'quickSearchBar 的 style'
      }
    },
    {
      name: 'onQuickSearch',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '导航切换',
        help: '快捷导航切换时调用'
      }
    },
    {
      name: 'showQuickSearchIndicator',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否启用搜索',
        help: 'whether show quick search indicator'
      }
    },
    {
      name: 'delayTime',
      type: FieldTypes.number,
      defaultValue: 100,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '延迟时间',
        help: '延迟渲染时间设置（用于首屏优化，一开始渲染initialListSize数量的数据，在此时间后、延迟渲染剩余的数据项、即totalRowCount - initialListSize）'
      }
    },
    {
      name: 'delayActivityIndicator',
      type: FieldTypes.child,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: 'loading',
        help: '延迟渲染的 loading 指示器'
      }
    }
  ],
  children: () => true

}
const IndexedList = ListView.IndexedList

export default ReactWrapper(IndexedList, manifest)
