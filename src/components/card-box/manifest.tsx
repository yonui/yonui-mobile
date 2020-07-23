import { FieldTypes, EditTypes, ComponentManifest, UIObject, TypeProps } from 'yonui-extension'
const transformer = ({ meta, vm }) => {
  return (props) => {
    props.mReadOnly = vm?.get('mActionList')?.getReadOnly()
    return props;
  };
};
const manifest: ComponentManifest = {
  name: 'CardBox',
  label: '卡片容器',
  type: TypeProps.DataContainer,
  uiObject: UIObject.Containers,
  icon: 'card',
  props: [
    {
      name: 'displayStyle',
      type: FieldTypes.string,
      defaultValue: 'normal',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: 'normal', text: '正常' },
            { value: 'detail', text: '详情(带头部)' },
            { value: 'slideable', text: '可滑动删除' },
            { value: 'extra', text: '拓展模式' },
            { value: 'editable', text: '编辑模式' },
            { value: 'child', text: '子表详情' }
          ]
        },
        label: '展示状态'
      }
    },
    {
      name: 'btnText',
      type: FieldTypes.string,
      defaultValue: '删除',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '按钮文本',
        help: '滑动删除时有效'
      }
    },
    {
      name: 'rightStyle',
      type: FieldTypes.object,
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '按钮样式',
        help: '滑动删除时有效'
      }
    },
    {
      name: 'label',
      type: FieldTypes.string,
      defaultValue: '明细',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '标题',
        help: '详情态有效'
      }
    },
    {
      name: 'showDeleteIcon',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '展示删除按钮',
        help: '详情态有效'
      }
    },
    {
      name: 'showTitleExtraIcon',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '展示标题额外图标',
        help: '详情态有效'
      }
    }
  ],
  children: () => true,
  transformers: [
    'inherit',
    transformer
  ]
}

export default manifest
