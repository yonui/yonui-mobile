import { FieldTypes, EditTypes, ComponentManifest, UITable } from 'libraui-extension'

const carouselManifest: ComponentManifest = {
  name: 'Carousel',
  label: '走马灯',
  uiTable: UITable.BillTplGroupBase,
  type: 'Layout',
  props: [
    {
      name: 'selectedIndex',
      type: FieldTypes.number,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        props: {},
        label: '当前索引',
        help: '手动设置当前显示的索引'
      }
    },
    {
      name: 'ratio',
      type: FieldTypes.string,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '面板宽高比'
      }
    },
    {
      name: 'autoplayInterval',
      type: FieldTypes.number,
      defaultValue: 3000,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        props: {},
        label: '切换间隔',
        help: '自动切换的时间间隔'
      }
    },
    {
      name: 'vertical',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '垂直展示'
      }
    },
    {
      name: 'dots',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '展示指示点',
        help: '是否显示面板指示点'
      }
    },
    {
      name: 'autoplay',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '自动切换'
      }
    },
    {
      name: 'infinite',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否循环播放'
      }
    },
    {
      name: 'frameOverflow',
      type: FieldTypes.string,
      defaultValue: 'hidden',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: 'overflow样式',
        help: '设置 slider frame 的 overflow 样式'
      }
    },
    {
      name: 'cellSpacing',
      type: FieldTypes.number,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        props: {},
        label: '间距',
        help: '项目之间的间距，以px为单位'
      }
    },
    {
      name: 'swipeSpeed',
      type: FieldTypes.number,
      defaultValue: 12,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        props: {},
        label: '滑动灵敏度',
        help: '滑动灵敏度'
      }
    },
    {
      name: 'beforeChange',
      type: FieldTypes.action,
      defaultValue: () => {},
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '切换前回调',
        help: '切换面板前的回调函数'
      }
    },
    {
      name: 'afterChange',
      type: FieldTypes.action,
      defaultValue: () => {},
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '切换后回调',
        help: '切换面板后的回调函数'
      }
    },
  ],
  children: ['CarouselItem']
}
const carouselItemManifest: ComponentManifest = {
  name: 'CarouselItem',
  label: '走马灯Item',
  // uiTable: UITable.BillTplGroupBase,
  type: 'Layout',
  props: [
    {
      name: 'backgroundColor',
      type: FieldTypes.string,
      defaultValue: 'transparent',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '背景颜色'
      }
    },
    {
      name: 'backgroundImage',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '背景图片'
      }
    },
    {
      name: 'backgroundSize',
      type: FieldTypes.string,
      defaultValue: 'cover',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options: [
            { value: 'cover', text: '充满面板' },
            { value: 'contain', text: '适应面板' },
            { value: '100%', text: '拉伸以充满面板' }
          ]
        },
        label: '背景图片拉伸方式'
      }
    },
    {
      name: 'height',
      type: FieldTypes.number,
      defaultValue: 200,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: 'Item高度'
      }
    }
  ],
  children: () => true,
  parent: ['Carousel']
}



export {
  carouselManifest,
  carouselItemManifest
}
