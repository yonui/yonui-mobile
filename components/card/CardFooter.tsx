import React from 'react'
import { Card } from 'antd-mobile'
import { FieldTypes, EditTypes, ReactWrapper } from '@libraui/extension'
const CardFooter = Card.Footer
const manifest = {
  name: 'CardFooter',
  label: '卡片底部',
  description: '',
  type: 'DataDisplay',
  props: [
    {
      name: 'content',
      type: FieldTypes.child,
      defaultValue: 'footer content',
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: '尾部内容'
      }
    },
    {
      name: 'extra',
      type: FieldTypes.child,
      defaultValue: 'extra footer content',
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {},
        label: '尾部辅助内容'
      }
    }
  ]
}

export default ReactWrapper((props: any) => <CardFooter {...props}></CardFooter>, manifest)
