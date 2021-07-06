
import { ComponentManifest, UIObject, TypeProps, FieldTypes, EditTypes } from 'yonui-extension'

// todo 未配置 onClick onChange
const manifest: ComponentManifest = {
  name: 'Popover',
  label: '气泡',
  uiObject: UIObject.Containers,
  type: TypeProps.LayoutContainer,
  props: [
    {
      name: 'placement',
      type: FieldTypes.string,
      defaultValue: 'bottomLeft',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'bottomLeft', text: '左下' },
              { value: 'bottomRight', text: '右下' }
            ]
        },
        label: '位置'
      }
    },
    {
      name: 'size',
      type: FieldTypes.string,
      defaultValue: 'sm',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'md', text: '中' },
              { value: 'sm', text: '小' }
            ]
        },
        label: '大小'
      }
    },
    {
      name: 'data',
      type: FieldTypes.array,
      defaultValue: JSON.stringify([
        { key: '1', icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', text: '选项' }
      ]),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: 'pop内容',
      }
    },
    {
      name: 'dark',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '深色模式'
      }
    },
    {
      name: 'visible',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '显示'
      }
    }
  ],
  children: () => true,
  events: [
    {
      name: 'onVisibleChange',
      des: '当显隐状态变化时回调函数'
    },
    {
      name: 'onSelect',
      des: '选中回调函数'
    }
  ],
  transformers: [
    'inherit',
    ['bindEvent', { events: ['onVisibleChange', 'onSelect'] }],
  ]
}

export default manifest
