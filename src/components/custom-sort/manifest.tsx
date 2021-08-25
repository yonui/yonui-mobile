import { ComponentManifest, UIObject, TypeProps, FieldTypes, EditTypes } from 'yonui-extension';

const manifest: ComponentManifest = {
  name: 'CustomSort',
  label: '自定义分组',
  type: TypeProps.FunctionalControls,
  uiObject: UIObject.Controls,
  props: [
    {
      name: 'initialKey',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '初始选中',
        help: '组件渲染时默认选中选项对应的key'
      }
    },
    {
      name: 'data',
      type: FieldTypes.array,
      defaultValue: JSON.stringify([
        {
          key: '1', // 唯一key
          label: '主1', // 每项名称
          rightIcon: 'icon-no3', // 名称右侧icon,没有则不渲染
          extraText: '(1)', // icon后额外文本,没有则不渲染
          // 子项
          children: [
            {
              key: '1-1',
              label: '哈哈哈1-1',
              extraText: '(2)',
            },
            {
              key: '1-2',
              label: '哈哈哈1-2',
              extraText: '(3)',
            }
          ]
        }
      ]),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '数据',
        help: 'key为每项唯一key,rightIcon为label右侧icon,extraText为icon右侧额外文本'
      }
    },
    {
      name: 'selectedColor',
      type: FieldTypes.string,
      defaultValue: '#EE2233',
      showDesign: true,
      designConfig: {
        label: '选中时颜色',
        type: EditTypes.Color,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'extraTextColor',
      type: FieldTypes.string,
      defaultValue: '#EE2233',
      showDesign: true,
      designConfig: {
        label: '额外文本颜色',
        type: EditTypes.Color,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'modelMarginTop',
      type: FieldTypes.number,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: true,
        props: {},
        label: '窗口下移像素'
      }
    }
  ],
  events: [
    {
      name: 'onSelectItem',
      des: '选择某项时'
    }
  ],
  transformers: [
    'inherit',
    ['bindEvent', { events: ['onSelectItem'] }],
  ],
  children: () => true
};

export default manifest;
