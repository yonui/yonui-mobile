import { ImagePicker } from 'antd-mobile'
import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from 'libraui-extension'
// todo files
const manifest: ComponentManifest = {
  name: 'ImagePicker',
  label: '图片选择器',
  type: 'DataEntry',
  props: [
    {
      name: 'onChange',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onChange'
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
        label: 'onImageClick',
        help: '点击图片触发的回调'
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
        label: 'onAddImageClick',
        help: '自定义选择图片的方法'
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
        label: 'onFail',
        help: '选择失败'
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
        label: '添加按钮',
        help: '显示添加按钮'
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
        label: '支持多选'
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
        label: '单行数量',
        help: '单行的图片数量'
      }
    },
    {
      name: 'capture',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '捕获设置',
        help: '图片捕获设置'
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
        label: '隐藏删除',
        help: '是否隐藏删除按钮'
      }
    }
  ]
}
export default ReactWrapper(ImagePicker, manifest)
