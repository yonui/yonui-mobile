import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
// import { getCssSelectParams } from '../_utils'

const manifest: ComponentManifest = {
  name: 'Label',
  label: '标签',
  type: 'basicControls',
  icon: 'biaoqian1',
  uiObject: UIObject.Controls,
  props: [
    // {
    //   name: 'type',
    //   type: FieldTypes.string,
    //   defaultValue: 'default',
    //   showDesign: true,
    //   designConfig: {
    //     label: '渲染类型',
    //     type: EditTypes.Select,
    //     isRequired: false,
    //     props: {
    //       options:
    //         [
    //           { value: 'default', text: '默认' },
    //           // { value: 'primary', text: '主色调' },
    //           // { value: 'border', text: '边框型' },
    //           { value: 'label', text: 'Label型' }
    //         ]
    //     }
    //   }
    // },
    // {
    //   name: 'width',
    //   type: FieldTypes.string,
    //   defaultValue: '',
    //   showDesign: true,
    //   designConfig: {
    //     label: '宽度',
    //     help: '可设为固定值或百分比形式',
    //     type: EditTypes.Text,
    //     isRequired: false,
    //     props: {}
    //   }
    // },
    {
      name: 'textAlign',
      type: FieldTypes.string,
      defaultValue: 'left',
      showDesign: true,
      designConfig: {
        label: '文本对齐方式',
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options:
            [
              { value: 'left', text: '左对齐' },
              { value: 'center', text: '居中' },
              { value: 'right', text: '右对齐' }
            ]
        }
      }
    },
    {
      name: 'leftIcon',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.IframeModal,
        props: {
          caption: '图标库',
          addText: '添加图标',
          editText: '更换图标',
          iframeUrl: '/IconSelect?iframeId=leftIcon',
          iframeId: 'iconSelectIframeleftIcon',
          message: true,
          footer: true
        },
        label: '左侧图标'
      }
    },
    {
      name: 'rightIcon',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.IframeModal,
        props: {
          caption: '图标库',
          addText: '添加图标',
          editText: '更换图标',
          iframeUrl: '/IconSelect?iframeId=rightIcon',
          iframeId: 'iconSelectIframerightIcon',
          message: true,
          footer: true
        },
        label: '右侧图标'
      }
    }
  ]
}
export default manifest
