import React from 'react'
import { Modal } from 'antd-mobile'
import { Component, EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
import { ModalProps } from 'antd-mobile/lib/modal/Modal'
const manifest: ComponentManifest = {
  name: 'Modal',
  label: '对话框',
  type: 'Feedback',
  props: [
    {
      name: 'visible',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        label: '对话框是否可见',
        type: EditTypes.Bool,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'closable',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        label: '是否显示关闭按钮',
        type: EditTypes.Bool,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'maskClosable',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        label: '点击蒙层是否允许关闭',
        type: EditTypes.Bool,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'afterClose',
      type: FieldTypes.action,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        label: 'Modal 完全关闭后的回调',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'onClose',
      type: FieldTypes.action,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        label: '点击 x 或 mask 回调',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'transparent',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        label: '是否背景透明',
        type: EditTypes.Bool,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'popup',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        label: '是否弹窗模式',
        type: EditTypes.Bool,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'size',
      type: FieldTypes.string,
      defaultValue: 'fade',
      showDesign: true,
      designConfig: {
        label: '可选',
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: 'slide-down', text: '向下' },
            { value: 'slide-up', text: '向上' },
            { value: 'fade', text: '逐渐消失' },
            { value: 'slide', text: '滑动' }
          ]
        }
      }
    },
    {
      name: 'title',
      type: FieldTypes.child,
      showDesign: true,
      designConfig: {
        label: '标题',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'footer',
      type: FieldTypes.array,
      showDesign: true,
      designConfig: {
        label: '底部内容',
        type: EditTypes.Json,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'platform',
      type: FieldTypes.string,
      showDesign: true,
      defaultValue: 'ios',
      designConfig: {
        label: '平台',
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: 'android', text: '安卓' },
            { value: 'ios', text: '苹果' }
          ]
        }
      }
    },
    {
      name: 'transitionName',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        label: 'Modal 主内容动画 className',
        type: EditTypes.Select,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'maskTransitionName',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        label: 'mask 动画 className',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'className',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        label: '手动设置 Modal 的 className',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'wrapClassName',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        label: '手动设置 Modal wrap 的 className',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    }
  ],
  children: ['Card']
}
export default class ModalComponent implements Component<ModalProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => (<Modal {...props}>{props.children}</Modal>), { manifest })
}
