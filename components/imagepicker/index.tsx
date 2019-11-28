import React from 'react'
import { ImagePicker } from 'antd-mobile'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@metaui/extension'
import { ImagePickerPropTypes } from 'antd-mobile/lib/image-picker'
// todo files
const manifest: ComponentManifest = {
  name: 'ImagePicker ',
  label: '图片选择器',
  props: [
    {
      name: 'onChange',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '改变回调'
      }
    },
    {
      name: 'onImageClick',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '点击图片触发的回调'
      }
    },
    {
      name: 'onAddImageClick',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '自定义选择图片的方法'
      }
    },
    {
      name: 'onFail',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '选择失败'
      }
    },
    {
      name: 'selectable',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否显示添加按钮'
      }
    },
    {
      name: 'multiple',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否支持多选'
      }
    },
    {
      name: 'accept',
      type: FieldTypes.string,
      defaultValue: 'image/*',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '图片类型'
      }
    },
    {
      name: 'length',
      type: FieldTypes.string || FieldTypes.number,
      defaultValue: 4,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text || EditTypes.Number,
        isRequired: true,
        props: {},
        label: '单行的图片数量'
      }
    },
    {
      name: '图片捕获设置',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否支持多选'
      }
    },
    {
      name: 'disableDelete',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否隐藏删除按钮'
      }
    }
  ]
}
export default class ImagePickerComponent implements Component<ImagePickerPropTypes> {
  manifest = manifest
  render = ReactWrapper((props: any) => <ImagePicker {...props}/>)
}
