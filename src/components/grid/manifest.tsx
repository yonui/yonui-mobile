import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest, UITable } from 'libraui-extension';
const manifest: ComponentManifest = {
  name: 'Grid',
  uiTable: UITable.BillTplGroupBase,
  label: '宫格',
  description: '在水平和垂直方向，将布局切分成若干等大的区块。',
  type: 'Containers',
  props: [
    {
      name: 'data',
      type: FieldTypes.array,
      defaultValue: JSON.stringify([{ text: 1 }, { text: 2 }]),
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
    },
    {
      name: 'columnNum',
      type: FieldTypes.number,
      defaultValue: 4,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '列数'
      }
    },
    {
      name: 'hasLine',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '边框'
      }
    },
    {
      name: 'outContent',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '显示外框内容',
        help: '当outContent为true,renderItem方法无效'
      }
    },
    {
      name: 'isCarousel',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: false, // 会调用antd的slider相关组件，涉及ref
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '跑马灯'
      }
    },
    {
      name: 'carouselMaxRow',
      type: FieldTypes.number,
      defaultValue: 2,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '展示行数',
        help: '如果是跑马灯, 一页跑马灯需要展示的行数'
      }
    },
    {
      name: 'renderItem',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '创建函数',
        help: '自定义每个 grid 条目的创建函数'
      }
    },
    {
      name: 'square',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '正方形',
        help: '每个格子是否固定为正方形'
      }
    },
    {
      name: 'activeStyle',
      type: FieldTypes.string,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: 'activeStyle',
        help: '点击反馈的自定义样式 (设为 false 时表示禁止点击反馈)'
      }
    },
    {
      name: 'activeClassName',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'activeClassName',
        help: '点击反馈的自定义类名'
      }
    },
    {
      name: 'itemSize',
      type: FieldTypes.string,
      defaultValue: 'sm',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'sm', text: 'sm' },
              { value: 'md', text: 'md' },
              { value: 'lg', text: 'lg' }
            ]
        },
        label: 'item上icon的大小'
      }
    },
    {
      name: 'itemStyle',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'itemStyle',
        help: '每个格子自定义样式'
      }
    }
  ],
  children: []

}
export {
  manifest,
  ReactWrapper
}
