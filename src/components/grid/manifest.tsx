import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
const image = [
  'https://i.yonyou.com/website/img/%E4%BC%81%E4%B8%9A%E9%A6%86%E9%A2%84%E7%BA%A6.png',
  'https://i.yonyou.com/website/img/%E5%9C%A8%E7%BA%BF%E5%AE%A1%E6%89%B9%E7%B3%BB%E7%BB%9F.png',
  'https://i.yonyou.com/website/img/%E8%AE%BE%E5%A4%87%E7%94%B3%E8%AF%B7.png',
  'https://i.yonyou.com/website/img/%E4%BC%81%E4%B8%9A%E6%96%87%E5%8C%96.png',
  'https://i.yonyou.com/website/img/%E9%87%87%E8%B4%AD%E6%8C%87%E6%A0%87%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.png',
  'https://i.yonyou.com/website/img/%E5%95%86%E5%8A%A1%E7%94%9F%E4%BA%A7.png',
  'https://i.yonyou.com/website/img/%E5%B7%A5%E6%97%B6%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.png',
  'https://i.yonyou.com/website/img/%E4%BC%99%E4%BC%B4%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.png',
  'https://i.yonyou.com/website/img/%E4%BC%99%E4%BC%B4%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.png'
]
const texts = [
  '采购订单',
  '考勤',
  '审批',
  '工资',
  '日志',
  '公告',
  '项目',
  '云盘',
  '文档'
]
const nums = [
  88,
  18,
  0,
  44,
  55,
  8,
  89,
  190,
  5

]
const keys = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
]
const urls = []
const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: image[i],
  text: texts[i],
  number: nums[i],
  key: keys[i],
  url: urls[i]
}))
const manifest: ComponentManifest = {
  name: 'Grid',
  uiObject: UIObject.Containers,
  label: '宫格',
  description: '在水平和垂直方向，将布局切分成若干等大的区块。',
  // type: TypeProps.FunctionalControls,
  icon: 'table',
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
        label: '菜单数据',
        help: '传入的菜单数据'
      }
    },
    // {
    //   name: 'onClick',
    //   type: FieldTypes.action,
    //   defaultValue: '',
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     isRequired: false,
    //     props: {},
    //     label: 'onClick',
    //     help: '点击每个菜单的回调函数'
    //   }
    // },
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
        help: '当显示外框内容值为true,创建函数(renderItem)方法无效'
      }
    },
    {
      name: 'isCarousel',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true, // 会调用antd的slider相关组件，涉及ref
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
      name: 'showHeader',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '显示标题'
      }
    },
    {
      name: 'urlValid',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: 'url跳转'
      }
    },
    {
      name: 'gridTitle',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '宫格标题',
      }
    },
    {
      name: 'mode',
      type: FieldTypes.string,
      defaultValue: 'image',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'image', text: '图片' },
              { value: 'number', text: '数字' }
            ]
        },
        label: '模式'
      }
    },
    {
      name: 'itemSize',
      type: FieldTypes.string,
      defaultValue: 'lg',
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
        label: '格子上图标大小',
        help: '每个格子上图标大小,当显示外框内容值为false,该值生效'
      }
    },
    {
      name: 'itemDir',
      type: FieldTypes.string,
      defaultValue: 'column',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'column', text: '上下' },
              { value: 'row', text: '左右' },
            ]
        },
        label: '图标文字布局'
      }
    }
  ],
  children: [],
  events: [
    {
      name: 'onSelect',
      des: '点击'
    },
    {
      name: 'onShowMore',
      des: '查看更多'
    }
  ],
  transformers: [
    'inherit',
    ['bindEvent', { events: ['onSelect', 'onShowMore'] }],
  ]

}
export default manifest
