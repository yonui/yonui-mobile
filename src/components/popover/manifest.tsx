
import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'

// todo 未配置 onClick onChange
const manifest: ComponentManifest = {
  name: 'Popover',
  label: '气泡',
  description: '在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。',
  icon: 'cards',
  uiObject: UIObject.Containers,
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
              // { value: 'left', text: 'left' },
              // { value: 'right', text: 'right' },
              // { value: 'top', text: 'top' },
              // { value: 'bottom', text: 'bottom' },
              // { value: 'topLeft', text: 'topLeft' },
              // { value: 'topRight', text: 'topRight' },
              { value: 'bottomLeft', text: 'bottomLeft' },
              { value: 'bottomRight', text: 'bottomRight' }
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
              // { value: 'left', text: 'left' },
              // { value: 'right', text: 'right' },
              // { value: 'top', text: 'top' },
              // { value: 'bottom', text: 'bottom' },
              // { value: 'topLeft', text: 'topLeft' },
              { value: 'md', text: 'md' },
              { value: 'sm', text: 'sm' }
              // { value: 'bottomRight', text: 'bottomRight' }
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
      defaultValue: false, // 备注：与antd相反，为了展示
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
