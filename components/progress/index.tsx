import * as React from 'react'
import { Component } from '@metaui/extension'
import { Progress } from 'antd-mobile'
export default class MetaProgress implements Component {
  manifest = {
    name: 'Progress',
    label: '进度条'
  }

  render = (props: any) => (<Progress {...props} />)
}
