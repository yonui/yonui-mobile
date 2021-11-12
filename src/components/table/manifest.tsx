import { ComponentManifest, TypeProps, UIObject, FieldTypes, EditTypes } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'Table',
  label: '数量选择',
  type: TypeProps.FunctionalControls,
  uiObject: UIObject.Controls,
  props: [
    {
      name: 'title',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '标题'
      }
    },
    {
      name: 'columns',
      type: FieldTypes.array,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: true,
        props: {},
        label: '表头设置'
      }
    },
    {
      name: 'data',
      type: FieldTypes.array,
      defaultValue: 100,
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '数据设置',
        help: '数据设置'
      }
    },
    {
      name: 'addOrderColumn',
      type: FieldTypes.boolean,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否显示序号',
        help: '是否显示序号'
      }
    },
    {
      name: 'startOrder',
      type: FieldTypes.number,
      defaultValue: 1,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '序号起始值',
        help: '序号起始值'
      }
    },
    {
      name: 'highlighted',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否前三个高亮',
        help: '是否前三个高亮'
      }
    }
  ],
  children: [],
  events: [
    {
      name: 'onSort',
      des: '排序时回调'
    },
    {
      name: 'loadMore',
      des: '加载更多时回调'
    }
  ],
  transformers: [
    'inherit',
    ['bindEvent', { events: ['onSort', 'loadMore'] }],
  ]
}

export default manifest
