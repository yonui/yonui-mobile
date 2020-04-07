import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
// import { getCssSelectParams } from '../_utils'

const manifest: ComponentManifest = {
  name: 'Label',
  label: '标签',
  type: 'basicControls',
  icon: 'biaoqian1',
  uiObject: UIObject.Controls,
  props: [
    {
      name: 'label',
      type: FieldTypes.string,
      defaultValue: '文本',
      showDesign: true,
      designConfig: {
        label: '文本内容',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'mode',
      type: FieldTypes.string,
      defaultValue: 'default',
      showDesign: true,
      designConfig: {
        label: '渲染类型',
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options:
            [
              { value: 'default', text: '默认' },
              { value: 'primary', text: '主色调' },
              { value: 'border', text: '边框型' },
              { value: 'label', text: 'Label型' }
            ]
        }
      }
    },
    {
      name: 'width',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        label: '宽度',
        help: '可设为固定值或百分比形式',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'color',
      type: FieldTypes.string,
      defaultValue: '#e14c46',
      showDesign: true,
      designConfig: {
        label: '颜色',
        type: EditTypes.Color,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'bgColor',
      type: FieldTypes.string,
      defaultValue: '#ffffff',
      showDesign: true,
      designConfig: {
        label: '背景色',
        help: '仅在默认、Label模式下有效',
        type: EditTypes.Color,
        isRequired: false,
        props: {}
      }
    }
  ]
}
export default manifest
