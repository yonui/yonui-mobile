import { EditTypes, FieldTypes, ComponentManifest, UIObject, TypeProps } from 'yonui-extension'
const transformer = ({ meta, vm }) => {
  return (props) => {
    props.meta = meta;
    props.vm = vm;
    return props;
  };
};
const manifest: ComponentManifest = {
  name: 'Flex',
  label: '流式布局',
  type: TypeProps.LayoutContainer,
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
              { value: 'row', text: '从左到右' },
              { value: 'row-reverse', text: '从右到左' },
              { value: 'column', text: '从上到下' },
              { value: 'column-reverse', text: '从下到上' }
            ]
        },
        label: '布局方向',
        help: '布局方向'
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
        label: '水平方向对齐',
        help: '子元素在水平方向对齐'
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
              { value: 'start', text: '上对齐' },
              { value: 'end', text: '下对齐' },
              { value: 'center', text: '居中' }
            ]
        },
        label: '垂直方向对齐',
        help: '子元素在交垂直方向对齐'
      }
    }
  ],
  children: () => true,
  parent: () => true,
  events: [
    {
      name: 'onClick',
      des: '点击'
    },
    {
      name: 'onLongPress',
      des: '长按'
    }
  ],
  transformers: [
    'inherit',
    ['bindEvent', { events: ['onClick', 'onLongPress'] }],
    transformer
  ]
}

export default manifest
