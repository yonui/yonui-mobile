import { FieldTypes, EditTypes, ComponentManifest, UITable } from 'libraui-extension'
const manifest: ComponentManifest = {
  name: 'Card',
  label: '卡片',
  type: 'basicControls',
  uiTable: UITable.BillTplGroupBase,
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
    },
    {
      name: 'showHeader',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否显示卡片标题'
      }
    },
    {
      name: 'headerTitle',
      type: FieldTypes.child,
      defaultValue: 'Header Title',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '标题'
      }
    },
    {
      name: 'headerThumb',
      type: FieldTypes.string,
      defaultValue: 'thumb',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '标题图片'
      }
    },
    {
      name: 'headerExtra',
      type: FieldTypes.string,
      defaultValue: 'arrow',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '标题辅助内容'
      }
    },
    {
      name: 'content',
      type: FieldTypes.child,
      defaultValue: 'This is content of `Card`',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '卡片内容'
      }
    },
    {
      name: 'showFooter',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否显示卡片尾部'
      }
    },
    {
      name: 'footerContent',
      type: FieldTypes.child,
      defaultValue: 'Footer content',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '尾部内容'
      }
    },
    {
      name: 'footerExtra',
      type: FieldTypes.child,
      defaultValue: 'Footer extra',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '尾部辅助内容'
      }
    }
  ],
  children: () => true
}

export default manifest
