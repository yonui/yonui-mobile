import { ListView } from 'antd-mobile'
import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest ,UITable} from 'libraui-extension'

const manifest: ComponentManifest = {
  name: 'ListView',
  label: '长列表',
  description: '实现列表功能',
  type: 'business',
  uiTable: UITable.BillTplGroupBase,
  props: [
    {
      name: 'dataSource',
      type: FieldTypes.array,
      defaultValue: JSON.stringify([{}]),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '数据',
        help: '数据源'
      }
    },
    {
      name: 'height',
      type: FieldTypes.number,
      defaultValue: 500,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '列表高度'
      }
    },
    {
      name: 'initialListSize',
      type: FieldTypes.number,
      defaultValue: 3,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: 'initialListSize',
        help: '指定在组件刚挂载的时候渲染多少行数据，用这个属性来确保首屏显示合适数量的数据'
      }
    },
    {
      name: 'showNum',
      type: FieldTypes.number,
      defaultValue: 100, //默认全部展示
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: 'showNum',
        help: '单行数据展示多少'
      }
    },
    {
      name: 'pageSize',
      type: FieldTypes.number,
      defaultValue: 1,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: 'pageSize',
        help: '每次事件循环（每帧）渲染的行数'
      }
    },
    {
      name: 'refreshing',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '下拉刷新',
        help: '下拉刷新是否展示'
      }
    },
    // {
    //   name: 'isLoading',
    //   type: FieldTypes.boolean,
    //   defaultValue: false,
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Bool,
    //     isRequired: false,
    //     props: {},
    //     label: '上拉加载',
    //     help: '上拉加载是否展示"加载中"'
    //   }
    // },
    {
      name: 'showSeparator',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否显示分割',
        help: '列表项中间的分割区域'
      }
    },
    {
      name: 'footerContent',
      type: FieldTypes.string,
      defaultValue: '加载中...',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '加载文字',
        help: '上拉加载默认展示"加载中",与剩余多少条不并存'
      }
    },
    {
      name: 'showPullToReresh',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: 'showPullToReresh',
        help: '是否有上拉刷新功能'
      }
    },
    {
      name: 'onEndReached',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: '上拉回调',
        help: 'onEndReached,当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素的距离时调用'
      }
    },
    {
      name: 'onFresh',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: '下拉回调',
        help: 'onFresh,下拉刷新回调函数'
      }
    },
    {
      name: 'onRowClick',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: 'onRowClick',
        help: '点击每行'
      }
    },
    {
      name: 'onScroll',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: 'onScroll',
        help: '滚动触发操作'
      }
    }
  ],
  children: ()=>true// 应该还可以放别的组件-不知道有哪些
}

const manifestIndexedList: ComponentManifest = {
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
export {manifest,manifestIndexedList,ReactWrapper}