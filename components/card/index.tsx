import React from 'react'
import { Card } from 'antd-mobile'
import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
const manifest: ComponentManifest = {
  name: 'Card',
  label: '卡片',
  description: '',
  type: 'DataDisplay',
  props: [
    {
      name: 'full',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否通栏'
      }
    }
  ],
  children: ['CardHeader', 'CardBody', 'CardFooter']// 应该还可以放别的组件-不知道有哪些
}
export default ReactWrapper((props: any) => <Card {...props}>{props.children}</Card>, manifest)
