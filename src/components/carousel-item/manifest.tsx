
import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'

const manifest: ComponentManifest = {
  name: 'CarouselItem',
  label: '轮播页',
  uiObject: UIObject.Containers,
  type: 'basicControls',
  icon: 'arrow',
  props: [
    {
      name: 'backgroundColor',
      type: FieldTypes.string,
      defaultValue: 'transparent',
      showDesign: true,
      designConfig: {
        type: EditTypes.Color,
        props: {},
        label: '背景颜色'
      }
    },
    {
      name: 'backgroundImage',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '背景图片'
      }
    },
    {
      name: 'backgroundSize',
      type: FieldTypes.string,
      defaultValue: 'cover',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options: [
            { value: 'cover', text: '充满面板' },
            { value: 'contain', text: '适应面板' },
            { value: '100%', text: '拉伸以充满面板' }
          ]
        },
        label: '背景图片拉伸方式'
      }
    }
    // ,
    // {
    //   name: 'height',
    //   type: FieldTypes.string,
    //   defaultValue: '100%',
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     props: {},
    //     label: 'Item高度'
    //   }
    // }
  ],
  children: () => true
}

export default manifest
