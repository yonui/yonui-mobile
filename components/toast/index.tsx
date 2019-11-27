import React from 'react'
import { Component } from '@metaui/extension'
import { Toast } from 'antd-mobile'
export default class MetaToast implements Component {
  manifest = {
    name: 'Toast',
    label: '轻提示'
  }

  render = (props: any) => (<Toast {...props} />)
}
