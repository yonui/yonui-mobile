import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest ,UITable} from 'libraui-extension'
import React from 'react'
const manifestImage: ComponentManifest = {
  name: 'listitemYSTemplate1',
  label: '长列表项-图片或者印戳',
  description: '长列表项',
  type: 'business',
  uiTable: UITable.BillItemBase,
  props: [
    // {
    //   name: 'width',
    //   type: FieldTypes.number,
    //   defaultValue: 120,
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Number,
    //     isRequired: false,
    //     props: {},
    //     label: 'width'
    //   }
    // },
    {
      name: 'type',
      type: FieldTypes.string,
      defaultValue: "image",
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'image', text: '只显示图片' },
            { value: 'stamp', text: '印戳' },
          ]
        },
        label: 'type'
      }
    },
    {
      name: 'imageWidth',
      type: FieldTypes.number,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: 'imageWidth',
        help: '搭配type是image，其他type值无效'
      }
    },
    {
      name: 'imageHeight',
      type: FieldTypes.number,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: 'imageHeight',
        help: '搭配type是image，其他type值无效'
      }
    },
    {
      name: 'imageUrl',
      type: FieldTypes.string,
      defaultValue:'http://images.zon100.com/img/10000736/1000036361/1000121044_1000.jpg',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'imageUrl',
        help: '搭配type是image，其他type值无效，当没有children才有效'
      }
    },
    {
      name: 'stampTop',
      type: FieldTypes.number,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: 'stampTop',
        help: '搭配type是stamp，其他type值无效'
      }
    },
    {
      name: 'stampRight',
      type: FieldTypes.number,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: 'stampRight',
        help: '搭配type是stamp，其他type值无效'
      }
    },
    {
      name: 'stampUrl',
      type: FieldTypes.string,
      defaultValue:'http://dpic.tiankong.com/u3/u8/QJ8587875589.jpg',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'stampUrl',
        help: '搭配type是stamp，其他type值无效，当没有children才有效'
      }
    },
  ],
  children: []
}

export {manifestImage,ReactWrapper}