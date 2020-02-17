/**
 * rc-from是否需要增加,如果增加rc-from,需要写一个from组件
 */
import React from 'react'
import { Popover, Icon } from 'antd-mobile'
import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from 'libraui-extension'
// todo 未配置 onChange
const manifest: ComponentManifest = {
  name: 'PopoverItem',
  label: '气泡项',
  description: '在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。',
  type: 'Navigation',
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
      name: 'type',
      type: FieldTypes.string,
      defaultValue: 'check',
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
    }
  ]
}

export default ReactWrapper((props: any) => {
  return <Popover.Item {...props} icon={<Icon type={props.type}/>}>{props.label || props.children}</Popover.Item>
}, manifest)
