import { FieldTypes, EditTypes, ReactWrapper, UITable,ComponentManifest } from 'libraui-extension'
// todo 未配置 onClick onChange
const manifest: ComponentManifest = {
  name: 'Popover',
  label: '气泡',
  description: '在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。',
  type: 'Navigation',
  uiTable: UITable.BillTplGroupBase,
  props: [
    {
      name: 'visible',
      type: FieldTypes.boolean,
      defaultValue: true, // 备注：与antd相反，为了展示
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '显隐'
      }
    },
    {
      name: 'mask',
      type: FieldTypes.boolean,
      defaultValue: true, // 备注：与antd相反，为了展示
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '遮罩',
        help: '是否显示遮罩背景层'
      }
    },
    {
      name: 'placement',
      type: FieldTypes.string,
      defaultValue: 'bottomRight',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'left', text: 'left' },
              { value: 'right', text: 'right' },
              { value: 'top', text: 'top' },
              { value: 'bottom', text: 'bottom' },
              { value: 'topLeft', text: 'topLeft' },
              { value: 'topRight', text: 'topRight' },
              { value: 'bottomLeft', text: 'bottomLeft' },
              { value: 'bottomRight', text: 'bottomRight' }
            ]
        },
        label: '位置'
      }
    },
    {
      name: 'type',
      type: FieldTypes.string,
      defaultValue: 'ellipsis',
      showDesign: true,
      designConfig: {
        label: '图标',
        isRequired: false,
        type: EditTypes.IframeModal,
        props: {
          caption: '图标库',
          addText: '添加图标',
          editText: '更换图标',
          iframeUrl: '/IconSelect',
          iframeId: 'iconSelectIframe',
          message: true,
          footer: true
        }
      }
    },
    {
      name: 'onVisibleChange',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onVisibleChange',
        help: '当显隐状态变化时回调函数'
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
      name: 'onSelect',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onSelect',
        help: '选中回调函数'
      }
    }
  ],
  children: ['PopoverItem']
}


const manifestPopoverItem: ComponentManifest = {
  name: 'PopoverItem',
  label: '气泡项',
  description: '在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。',
  type: 'Navigation',
  uiTable: UITable.BillTplGroupBase,
  props: [
    {
      name: 'disabled',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '禁用'
      }
    },
    {
      name: 'label',
      type: FieldTypes.string,
      defaultValue: '气泡项',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '禁用'
      }
    },
    {
      name: 'icon',
      type: FieldTypes.object,
      showDesign: true,
      designConfig: {
        label: '图标',
        isRequired: false,
        type: EditTypes.Textarea,
        props: {},
      }
    }
  ]
}

export {manifest,manifestPopoverItem,ReactWrapper}