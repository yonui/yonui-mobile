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
        label: '初始选中'
      }
    },
    {
      name: 'data',
      type: FieldTypes.array,
      defaultValue: JSON.stringify([
        {
          key: '1', label: '默认', extraText: '(0)'
        }
      ]),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '数据',
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
  children: () => true
};

export default manifest;
