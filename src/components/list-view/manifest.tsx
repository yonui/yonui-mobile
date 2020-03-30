import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'

const manifest: ComponentManifest = {
  name: 'ListView',
  label: '长列表',
  description: '实现列表功能',
  type: 'basicControls',
  uiObject: UIObject.Containers,
  hidden: true,
  parent: () => false,
  icon: 'list',
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
      defaultValue: 600,
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
      defaultValue: 5,
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
      defaultValue: 100, // 默认全部展示
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
  children: () => true// 应该还可以放别的组件-不知道有哪些
}

export default manifest
