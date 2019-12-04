import React from 'react'
import { List } from 'antd-mobile'
import { Component, EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
import { ListProps } from 'antd-mobile/lib/list'
const manifest: ComponentManifest = {
  name: 'List',
  label: '列表',
  type: 'DataDisplay',
  props: [
    {
      name: 'renderHeader',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        label: 'list heder',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'renderFooter',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        label: 'list footer',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    }
  ],
  children: ['ListItem']
}
export default class ListComponent implements Component<ListProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => (<List {...props}/>), { manifest })
}
