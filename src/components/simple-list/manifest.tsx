import { FieldTypes, EditTypes, ComponentManifest, UIObject, TypeProps } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'SimpleList',
  label: '简单列表',
  type: TypeProps.DataContainer,
  uiObject: UIObject.Containers,
  hidden: true,
  props: [
    {
      name: 'pullToRefresh',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        label: '拉动刷新',
        isRequired: false,
        props: {}
      }
    },
    // {
    //   name: 'showFooter',
    //   type: FieldTypes.boolean,
    //   defaultValue: false,
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Bool,
    //     label: '展示底部',
    //     isRequired: false,
    //     props: {}
    //   }
    // },
    {
      name: 'footerText',
      type: FieldTypes.string,
      defaultValue: '加载中...',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        label: '底部文本',
        isRequired: false,
        props: {},
        help: '为空时不展示底部'
      }
    },
    {
      name: 'split',
      type: FieldTypes.string,
      defaultValue: 'blank',
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        label: '分隔',
        isRequired: false,
        props: {
          options: [
            { text: '无', value: 'none' },
            { text: '分割线', value: 'split' },
            { text: '分割区域', value: 'blank' }
          ]
        }
      }
    },
    {
      name: 'dataSource',
      type: FieldTypes.array,
      defaultValue: [],
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        label: '数据源',
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'height',
      type: FieldTypes.number,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        label: '高度',
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'reservedHeight',
      type: FieldTypes.number,
      defaultValue: 60,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        label: '底部预留高度',
        isRequired: false,
        props: {},
        help: '设置高度属性时此项无效'
      }
    },
    {
      name: 'renderRow',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        label: '行渲染方法',
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'onRefresh',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        label: '刷新回调',
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'onReachFoot',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        label: '到达底部回调',
        isRequired: false,
        props: {}
      }
    }
  ],
  children: () => true
}

export default manifest
