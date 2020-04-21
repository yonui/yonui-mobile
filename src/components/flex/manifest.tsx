import { EditTypes, FieldTypes, ComponentManifest, UIObject } from 'yonui-extension'

const manifest: ComponentManifest = {
  name: 'Flex',
  label: '流式布局',
  type: 'layoutContainer',
  description: '实现css flex布局', // 描述
  uiObject: UIObject.Containers,
  icon: 'icon_wangye',
  props: [// adapter适配层数据
    {
      name: 'direction',
      type: FieldTypes.string,
      defaultValue: 'row',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'row', text: '从左横向排布' },
              { value: 'row-reverse', text: '从右横向排布' },
              { value: 'column', text: '从上往下纵向排布' },
              { value: 'column-reverse', text: '从下往上纵向排布' }
            ]
        },
        label: '项目定位方向',
        help: '项目定位方向'
      }
    },
    {
      name: 'wrap',
      type: FieldTypes.string,
      defaultValue: 'nowrap',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'nowrap', text: '不换行' },
              { value: 'wrap', text: '向下换行' },
              { value: 'wrap-reverse', text: '向上换行' }
            ]
        },
        label: '换行方式',
        help: '子元素的换行方式'
      }
    },
    {
      name: 'justify',
      type: FieldTypes.string,
      defaultValue: 'start',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'start', text: '从左往右' },
              { value: 'end', text: '从右往左' },
              { value: 'between', text: '均匀分布' },
              { value: 'center', text: '从中间开始' },
              { value: 'around', text: '从中间等分' }
            ]
        },
        label: '主轴对齐方式',
        help: '子元素在主轴上的对齐方式'
      }
    },
    {
      name: 'align',
      type: FieldTypes.string,
      defaultValue: 'center',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'start', text: '顶部对齐' },
              { value: 'end', text: '底部对齐' },
              { value: 'center', text: '水平对齐' }
            ]
        },
        label: '交叉轴对齐方式',
        help: '子元素在交叉轴上的对齐方式'
      }
    }
  ],
  children: () => true,
  parent: () => true
}

export default manifest
