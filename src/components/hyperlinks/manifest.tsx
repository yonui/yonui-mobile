import { ComponentManifest, UIObject, TypeProps, FieldTypes, EditTypes, ExtensionProps } from 'yonui-extension'
import ListItemWrapper from '../list-item-wrapper'
const { getFilterProps } = ListItemWrapper

const manifest: ComponentManifest = {
  name: 'hyperlinks',
  uiObject: UIObject.Controls,
  label: '超链接',
  type: TypeProps.FormControls,
  icon: 'text',
  props: [{
    name: 'defaultLinkText',
    type: FieldTypes.string,
    defaultValue: '',
    showDesign: true,
    designConfig: {
      type: EditTypes.Text,
      isRequired: true,
      props: {},
      label: '链接文本默认值'
    }
  }, {
    name: 'defaultLinkAddress',
    type: FieldTypes.string,
    defaultValue: '',
    showDesign: true,
    designConfig: {
      type: EditTypes.Text,
      isRequired: true,
      props: {},
      label: '链接地址默认值'
    }
  }, {
    name: 'linkTextPlaceholder',
    type: FieldTypes.string,
    defaultValue: '请填写链接文本',
    showDesign: true,
    designConfig: {
      type: EditTypes.Text,
      isRequired: true,
      props: {},
      label: '链接文本占位符'
    }
  }, {
    name: 'linkAddressPlaceholder',
    type: FieldTypes.string,
    defaultValue: '请填写链接地址',
    showDesign: true,
    designConfig: {
      type: EditTypes.Text,
      isRequired: true,
      props: {},
      label: '链接地址占位符'
    }
  },
  ...getFilterProps(['singleLine', 'labelCls', 'labelStyle', 'contentCls', 'contentStyle', 'error', 'errorText'])
  ],
  propertyMap: {
    cShowCaption: 'label',
    bIsNull: 'notRequired',
  },
  extension: [
    ExtensionProps.bIsNull,
    ExtensionProps.disabled,
    ExtensionProps.bMustSelect,
    ExtensionProps.isExport,
    ExtensionProps.bVmExclude
  ],
}

export default manifest
