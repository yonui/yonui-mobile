import React from 'react'
import { ListView } from 'antd-mobile'
import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'

// todo 未配置 style activeStyle
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
      name: 'initialListSize',
      type: FieldTypes.number,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '数据行数',
        help: '指定在组件刚挂载的时候渲染多少行数据，用这个属性来确保首屏显示合适数量的数据'
      }
    },
    {
      name: 'onEndReached',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '回调函数',
        help: '当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素的距离时调用'
      }
    },
    {
      name: 'onEndReachedThreshold',
      type: FieldTypes.number,
      defaultValue: 1000,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '临界值',
        help: '调用onEndReached之前的临界值，单位是像素'
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
        label: '行数',
        help: '每次事件循环（每帧）渲染的行数'
      }
    },
    {
      name: 'renderHeader',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '渲染页头',
        help: '页头与页脚（如果提供）会在每次渲染过程中都重新渲染。如果它们重绘的性能开销很大，把他们包装到一个StaticContainer或者其它恰当的结构中。页脚在列表的最底部，而页头会在最顶部'
      }
    },
    {
      name: 'renderFooter',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '渲染页脚',
        help: '页头与页脚（如果提供）会在每次渲染过程中都重新渲染。如果它们重绘的性能开销很大，把他们包装到一个StaticContainer或者其它恰当的结构中。页脚在列表的最底部，而页头会在最顶部'
      }
    },
    {
      name: 'renderRow',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '渲染',
        help: '从数据源(data source)中接受一条数据，以及它和它所在section的ID。返回一个可渲染的组件来为这行数据进行渲染。默认情况下参数中的数据就是放进数据源中的数据本身，不过也可以提供一些转换器。如果某一行正在被高亮（通过调用highlightRow函数），ListView会得到相应的通知。'
      }
    },
    {
      name: 'renderScrollComponent',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '滚动组件',
        help: '指定一个函数，在其中返回一个可以滚动的组件，ListView将会在该组件内部进行渲染。默认情况下会返回一个包含指定属性的ScrollView。'
      }
    },
    {
      name: 'renderSectionHeader',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '每小节标题',
        help: '如果提供了此函数，会为每个小节(section)渲染一个标题'
      }
    },
    {
      name: 'renderSeparator',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '每行下面',
        help: '如果提供了此属性，一个可渲染的组件会被渲染在每一行下面，除了小节标题的前面的最后一行。在其上方的小节ID和行ID，以及邻近的行是否被高亮会作为参数传递进来。'
      }
    },
    {
      name: 'scrollRenderAheadDistance',
      type: FieldTypes.number,
      defaultValue: 1000,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '渲染临界值',
        help: '当一个行接近屏幕范围多少像素之内的时候，就开始渲染这一行'
      }
    },
    {
      name: 'contentContainerStyle',
      type: FieldTypes.object,
      defaultValue: JSON.stringify({}),
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '容器style',
        help: '这些样式会应用到一个内层的内容容器上，所有的子视图都会包裹在内容容器内'
      }
    },
    {
      name: 'horizontal',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '水平展示',
        help: '当此属性为true的时候，所有的的子视图会在水平方向上排成一行，而不是默认的在垂直方向上排成一列'
      }
    },
    {
      name: 'onContentSizeChange',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '视图变化回调',
        help: '此函数会在 ScrollView 内部可滚动内容的视图发生变化时调用。'
      }
    },
    {
      name: 'onScroll',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '滚动回调',
        help: '在滚动的过程中，每帧最多调用一次此回调函数。调用的频率可以用scrollEventThrottle属性来控制。'
      }
    },
    {
      name: 'scrollEventThrottle',
      type: FieldTypes.number,
      defaultValue: 50,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: 'scroll触发频率',
        help: '控制在滚动过程中，scroll事件被调用的频率'
      }
    },
    {
      name: 'onLayout',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '挂载回调',
        help: '当组件挂载或者布局变化的时候调用'
      }
    },
    {
      name: 'renderBodyComponent',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '自定义body',
        help: '自定义 body 的包裹组件'
      }
    },
    {
      name: 'renderSectionWrapper',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '区块回调函数',
        help: '渲染自定义的区块包裹组件'
      }
    },
    {
      name: 'renderSectionBodyWrapper',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '自定义body回调',
        help: '渲染自定义的区块 body 包裹组件'
      }
    },
    {
      name: 'useBodyScroll',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '使用html的body',
        help: '使用 html 的 body 作为滚动容器'
      }
    },
    {
      name: 'pullToRefresh',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '使用pullToRefresh',
        help: '使用 pullToRefresh， 你需要和 PullToRefresh 组件一起使用'
      }
    }
  ],
  children: []

}

export default ReactWrapper((props: any) => <ListView {...props}></ListView>, manifest)
