import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest ,UITable} from 'libraui-extension'
import React from 'react'
const manifestFont: ComponentManifest = {
  name: 'listitemYSTemplate1',
  label: '长列表项-文字',
  description: '长列表项',
  type: 'business',
  uiTable: UITable.BillItemBase,
  props: [
   
    {
      name: 'fontBold',
      type: FieldTypes.boolean,
      defaultValue:false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '文字加粗',
        help: 'fontBold'
      }
    },
    {
      name: 'title',
      type: FieldTypes.string,
      defaultValue:'入库时间',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'title',
        help: ''
      }
    },
    {
      name: 'value',
      type: FieldTypes.string,
      defaultValue:'101022286',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'value',
        help: ''
      }
    },
    {
      name: 'textAlign',
      type: FieldTypes.string,
      defaultValue:'',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: 'left', text: 'left' },
            { value: 'center', text: 'center' },
            { value: 'right', text: 'right' }
          ]
        },
        label: 'textAlign',
        help: ''
      }
    },
    {
      name: 'icon',
      type: FieldTypes.child,
      defaultValue:'<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583295603582&di=4dd66ab9b0c88189c6c1815fcc692685&imgtype=0&src=http%3A%2F%2Fimg.51miz.com%2FElement%2F00%2F37%2F06%2F45%2F3cb88b7d_E370645_765affc4.png%2521%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Fformat%2Fpng"></img>',
      showDesign: true,
      designConfig: {
        type: EditTypes.Textarea,
        isRequired: false,
        props: {
        },
        label: 'icon',
        help: ''
      }
    },
  ],
  children: []
}

export {manifestFont,ReactWrapper}