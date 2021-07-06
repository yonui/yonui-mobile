import { FieldTypes, EditTypes, ComponentManifest, TypeProps, UIObject } from 'yonui-extension'
const keys = [1, 2, 3]
const types = ['通知', '公告', '通知']
const titles = [
  '这是第一条通知',
  '这是一条公告',
  '这是一条很长的很长的很长的很长的很长的很长的很长的很长的很长的很长的很长的很长的很长的通知'
]
const data = Array.from(new Array(3)).map((_val, i) => ({
  key: keys[i],
  type: types[i],
  title: titles[i]
}))
// ey?: string | number
// con?: string
// ype?: string
// itle?: string
// rl?: string
const manifest: ComponentManifest = {
  name: 'name',
  label: 'label',
  type: TypeProps.BasicControls,
  uiObject: UIObject.Controls,
  props: [
    {
      name: 'data',
      type: FieldTypes.array,
      defaultValue: JSON.stringify(data),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '数据',
        help: '传入数据'
      }
    },
    {
      name: 'titleEllipsis',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '标题省略'
      }
    },
    {
      name: 'showNum',
      type: FieldTypes.number,
      defaultValue: 3,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '显示条数'
      }
    },
    {
      name: 'autoplayInterval',
      type: FieldTypes.number,
      defaultValue: 1000,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '播放间隔'
      }
    },
    {
      name: 'speed',
      type: FieldTypes.number,
      defaultValue: 1000,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '切换速度'
      }
    },
  ],
  children: [],
  events: [
    {
      name: 'onSelect',
      des: '点击'
    }
  ],
  transformers: [
    'inherit',
    ['bindEvent', { events: ['onSelect'] }],
  ]
}

export default manifest
